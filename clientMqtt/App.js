/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* @flow */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {Button} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'testTopic',
      subscribedTopic: 'testTopic',
      message: '',
      messageList: [],
      status: '',
      ip: '',
      port: 0,
      severity: '',
      sendingMessages: false,
    };
    var interval;
    this.client = null;
    //this.client.onConnectionLost = this.onConnectionLost;
    // client.onMessageArrived = this.onMessageArrived;
  }

  onConnectionLost = responseObject => {
    // TODO: onConnectionLost
    if(responseObject.errorCode !== 0){
      console.log('onConnectionLos:' + responseObject.errorMessage);
    }
  };

  onMessageArrived = message => {
    // TODO: onMessageArrived
    /*console.log('onMessageArrived:' + message.payloadString);
    newmessageList = this.state.messageList;
    newmessageList.unshift(message.payloadString);
    this.setState({ messageList: newmessageList });*/
  };

  subscribeTopic = () => {
    // TODO: subscribeTopic
    //Test *****
    /*clientSus = new Paho.MQTT.Client(this.state.ip, 1884, '1');
      this.setState(
        { status: 'isFetching' },
        () => {
          clientSus.connect({
            onSuccess: this.onConnect,
            useSSL: false,
            timeout: 3,
            onFailure: this.onFailure
          });
        }
      );*/
    //Test *****
    this.setState(
      { subscribedTopic: this.state.topic },
      () => {
        this.client.subscribe(this.state.subscribedTopic, { qos: 2 });
        //clientSus.subscribe(this.state.subscribedTopic, { qos: 2 }); //test
        console.log('Topic: ' + this.state.subscribedTopic);
      }
    );
  }

  onConnect = () => {
    // TODO: onConnect
    console.log('onConnect');
    this.setState({status: 'connected'});
  };

  onFailure = err => {
    // TODO: onFailure
    console.log('Connect failes');
    console.log(err);
    this.setState({status: 'failed'})
  };

  connect = () => {
    // TODO: connect
    this.client = new Paho.MQTT.Client(this.state.ip, this.state.port, '1');
    this.setState(
      { status: 'isFetching' },
      () => {
        this.client.connect({
          onSuccess: this.onConnect,
          useSSL: false,
          timeout: 3,
          onFailure: this.onFailure
        });
      }
    );
  }

  unSubscribeTopic = () => {
    /*// TODO: unSubscribeTopic
    client.unsubscribe(this.state.subscribedTopic);
    this.setState({ subscribedTopic: '' });*/
  };

  sendMessage = () => {
    // TODO: sendMessage
     this.setState({message: 'node-id:' + this.state.severity + ':-23.22488,-45.232'})
     console.log('message to send: ' + this.state.message);
     var message = new Paho.MQTT.Message(this.state.message);
     message.destinationName = this.state.subscribedTopic;
     this.client.send(message);
     console.log('message sent');
  };

  sendMessages = () => {
    if(this.state.sendingMessages == false){
      this.state.sendingMessages = true;
      this.interval = setInterval(this.sendMessage,10000);
    }else{
      clearInterval(this.interval);
      this.interval = setInterval(this.sendMessage,10000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.connectContainer}>
          <Text style={styles.label}>Broker IP:</Text>
          <TextInput
            style={styles.input}
            value={this.state.ip}
            onChangeText={event => this.setState({ip: event})}
          />
        </View>
        <View style={styles.connectContainer}>
          <Text style={styles.label}>Broker Port:</Text>
          <TextInput
            style={styles.input}
            value={this.state.port}
            onChangeText={event => this.setState({port: Number(event)})}
          />
        </View>
        {this.state.status === 'connected' ? (
          <Button
            type="solid"
            title="DISCONNECT"
            onPress={() => {
              clearInterval(this.interval);
              this.client.disconnect();
              this.setState({status: '' ,sendingMessages:false/*, subscribedTopic: ''*/});
              console.log('Disconnected');
            }}
            buttonStyle={{backgroundColor: '#397af8'}}
            disabled={!this.state.ip || !this.state.port}
          />
        ) : (
          <Button
            type="solid"
            title="CONNECT"
            onPress={this.connect}
            buttonStyle={{backgroundColor: '#72F178'}}
            disabled={!this.state.ip || !this.state.port}
          />
        )}
        <View style={styles.severityContainer}>
          <Text style={styles.label}>Severity</Text>
          <View style={styles.severityButtonContainer}>
            <Button
              type="solid"
              title="Low"
              onPress={e => this.setState({severity: 'Low'})}
              buttonStyle={{backgroundColor: '#72F178', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="Medium"
              onPress={e => this.setState({severity: 'Medium'})}
              buttonStyle={{backgroundColor: '#FFF145', margin: 20}}
              style={styles.severityButtonContainer}
            />
            <Button
              type="solid"
              title="High"
              onPress={e => this.setState({severity: 'High'})}
              buttonStyle={{backgroundColor: '#E21100', margin: 20}}
              style={styles.severityButtonContainer}
            />
          </View>
        </View>
        <Button
          type="solid"
          title="UPDATE"
          onPress={this.sendMessages}
          buttonStyle={{backgroundColor: '#127676'}}
          disabled={!this.state.severity}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#C8DFBA',
  },
  connectContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    padding: 10,
    marginLeft: 40,
    height: 50,
    width: 200,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
  },
  severityContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    margin: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  severityButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
  },
  messageContainer: {
    margin: 20,
  },
  message: {
    padding: 10,
    height: 50,
    width: '100%',
    marginTop: 15,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default App;
