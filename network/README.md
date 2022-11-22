##IMPORTANT IF YOU LOOKING FOR MININET CONF

As many groups are experiencing some problems with mininet-wifi config/integration with project solution, Prof. Cesar Marcondes he proposed three similar cenarios to overcome this issue. One of them is to implement a simple VM with a bridge interface to local wifi (the same as used by smartphone) and install the mosquito broker, allowing a user with android application send his message to this broker forwards it.

STEP 1 - From a linux VM (example:ubuntu-server-22.04) running in Virtual box with network mode in BRIDGE.

STEP 2 - Inside VM execute to install mosquitto server
sudo apt install mosquitto
sudo systemctl stop mosquitto

STEP 3 - Start mosquitto (Iot-LosMerengue) configuration. (use git clone )

mosquitto -c Iot-LosMerengues/brokerMosquitto/mosquitto_bridge.conf
