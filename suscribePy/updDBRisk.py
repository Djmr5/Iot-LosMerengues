import random

from datetime import datetime
import time
import mysql.connector
from sshtunnel import SSHTunnelForwarder
from mysql.connector import Error


broker = '13.90.21.47' #This changes
port = 1884
top_temp = "srv/rescue"
client_id = f'python-mqtt-{random.randint(0, 1000)}'

#***********************SQL*************************

def connect_mysql(host, user, password, dataBase):
    dbconn = mysql.connector.connect(host=host, user=user, password=password, database=dataBase)
    print('Connected to Database!')
    return dbconn

def disconnect_db(connection):
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")

def updataeRisk(database):
    print('EXECUTING......')
    now = datetime.now()  # current date and time
    year2 = now.strftime("%Y")
    month2 = now.strftime("%m")
    day2 = now.strftime("%d")
    hour2 = now.strftime("%H")
    minute2 = now.strftime("%M")
    second2 = now.strftime("%S")

    query = "SELECT * FROM messages"
    cursor = database.cursor()
    cursor.execute(query)
    messages = cursor.fetchall()

    for row in messages:
        id = row[0]
        year1 = row[5].strftime("%Y")
        month1 = row[5].strftime("%m")
        day1 = row[5].strftime("%d")
        hour1 = row[5].strftime("%H")
        minute1 = row[5].strftime("%M")
        second1 = row[5].strftime("%S")
        if day1 == day2:
            totalsecs1 = int(hour1)*3600 + int(minute1)*60 + int(second1)
            totalsecs2 = int(hour2)*3600 + int(minute2)*60 + int(second2)
            dif = totalsecs2 - totalsecs1
            if row[2] == 'Low' and dif > 25:
                updquery = "UPDATE messages SET Risk = 'Medium' WHERE nodeID = "+"'"+str(row[0])+"'"
                cursor.execute(updquery)
                database.commit()
            elif row[2] == 'Medium' and dif < 45:
                updquery = "UPDATE messages SET Risk = 'Medium' WHERE nodeID = " + "'"+str(row[0])+"'"
                cursor.execute(updquery)
                database.commit()
            elif row[2] == 'Medium' and dif>60:
                updquery = "UPDATE messages SET Risk = 'High' WHERE nodeID = " + "'"+str(row[0])+"'"
                cursor.execute(updquery)
                database.commit()

def run():
    rescueDB = connect_mysql('20.168.251.8', 'CARLO', 'Iot123456789','rescueDB')  # IP and user and password from mysql changes
    while True:
        updataeRisk(rescueDB)

run()
