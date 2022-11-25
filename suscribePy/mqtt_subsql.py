import random

from paho.mqtt import client as mqtt_client
import mysql.connector
from sshtunnel import SSHTunnelForwarder
from mysql.connector import Error


broker = '13.90.21.47' #This changes
port = 1884
top_temp = "srv/rescue"
client_id = f'python-mqtt-{random.randint(0, 1000)}'


def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    #client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def subscribe(client: mqtt_client, database):
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")
        insertMessage(database, msg.payload.decode())
    client.subscribe(top_temp, qos=2)
    client.on_message = on_message


#***********************SQL*************************

def connect_mysql(host, user, password, dataBase):
    dbconn = mysql.connector.connect(host=host, user=user, password=password, database=dataBase)
    print('Connected to Database!')
    return dbconn

def disconnect_db(connection):
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")

def insertMessage(database, message):
    numId = ''
    cursor = database.cursor()
    list = message.split(":")
    for char in range(5, len(list[0])):
        numId = numId + list[0][char]
    list[0] = numId
    listCoords = list[2].split(",")
    query = "INSERT INTO messages (nodeID, severity, longitude, latitude) VALUES (%s, %s, %s, %s)"
    vals = (int(list[0]), list[1], listCoords[0], listCoords[1])
    cursor.execute(query, vals)
    database.commit()
    print(cursor.rowcount, "message inserted in database.")

def run():
    rescueDB = connect_mysql('13.90.21.47', 'morki', 'iotpassword', 'rescueDB') #IP and user and password from mysql changes
    client = connect_mqtt()
    message = subscribe(client,rescueDB)
    client.loop_forever()
    #Tests
run()
