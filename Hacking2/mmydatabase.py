import sqlite3

conn = sqlite3.Connection("nilai_matematika")
cursor = conn.cursor()

cursor.execute("""
               CREATE TABLE IF NOT EXISTS kelas_vii(
               nisn TEXT PRIMARY KEY,
               nama TEXT, 
               nilai INTEGER
               )
               
               
""")
conn.commit()
cursor.close()
conn.close()