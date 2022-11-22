##IMPORTANT IF YOU LOOKING FOR MININET CONF

As many groups are facing some problems with the configuration/integration of mininet-wifi with the project solution, Prof. Cesar Marcondes proposed three similar scenarios to overcome this problem. One of them is to implement a simple VM with a bridge interface for local wi-fi (the same used by the smartphone) and install the mosquito broker, allowing a user with an android application to send his message to this broker and forward it.

STEP 1 - From a linux VM (example:ubuntu-server-22.04) running in Virtual box with network mode in BRIDGE.

STEP 2 - Inside VM execute to install mosquitto server

sudo apt install mosquitto
sudo systemctl stop mosquitto

STEP 3 - Start mosquitto (Iot-LosMerengue) configuration. (use git clone )

mosquitto -c Iot-LosMerengues/brokerMosquitto/mosquitto_bridge.conf
