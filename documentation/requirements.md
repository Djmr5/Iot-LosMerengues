Technical requirements

• As a developer, i want the users to have a quick and easy
access to the services we offer.
Acceptance criteria: The users will be able to download the
application from their phones store, The user will then
start his app, set the broker address and portas
his severity, and press the UPDATE button. Then, the app
will send the rescue message to the broker every 10
seconds.

• As a developer, I want to be prepared for the most
situation as possible, so that my app can help in most of
the situations.
Acceptance criteria: Python will be used for a much easier
interaction for an integration with Mininet, and with
mine-net will be able to emulate a network.

• As a developer, i want the rescue team to have quick
access to the information, using an efficient dashboard.
Acceptance criteria: The information will be stored in SQL
database, and with Grafana, the dashboard supports the
rescue team in identifying and prioritizing which actions
are required to keep the disaster victims. In addition, the
dashboard will make queries to the database (data source)
and process the answer to present the information in a
more helpful format.

• As a developer, I want to be able to have a fast
communication with the victims.
Acceptance criteria: The app will connect to a virtual
ubuntu server, opening the ports and configuring the
bridge and central finally we link both creating the MQTTprotocol.
MQTT broker receives messages from the publisher and
dispatches these messages to the subscribers. While it
dispatches messages, the MQTT broker uses the topic to
filter the MQTT clients that will receive the news.

• As a developer, I want to show the user geo-information
for a quick respond.
Acceptance criteria: Each node sends its state using MQTT
to the broker, where we have different classifications to
see the victim’s status (danger).

Non-technical requirements

• As a developer, i want to be able to contact the victim
regardless of signal since we don’t know where the crisis
can start.
Acceptance criteria: The user can connect to different
things, might be a drone antenna or router, so they can
contact the respond center with an update of their status
as fast as possible.

• As a victim i want the rescue team to know my location
and have an updated status of it.
Acceptance criteria: The user will be able to send direct
messages to the crisis center.
