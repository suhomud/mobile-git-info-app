import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerMainScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerProfileScreen: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerProfileInfo : {
    marginTop : 20,
  },
  button: {
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
    borderWidth: 2,
    borderRadius: 22,
  },
  buttonText: {
    color: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
});
