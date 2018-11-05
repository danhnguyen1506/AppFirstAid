
import React, {Component} from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, Image, Dimensions, Button } from 'react-native';
import { YellowBox } from 'react-native';

var {width, height} = Dimensions.get('window')
let styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
    },
  
    modal: {
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      flex: 1,
      height: height/1.358,
      width: '90%',
      top: height/14.45
    },
  
    button: {
      marginBottom: '2%',
      width: '95%',
      height: height/5.15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
  
    button1: {
      marginBottom: '2%',
      width: '46%',
      alignItems: 'center',
      justifyContent: 'center',
      height: height/5.15,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      marginLeft: 20,
      marginRight: 20,
    },
  
    buttonText: {
      fontWeight: 'bold',
      color: '#2A47FF',
      fontSize: 16,
      alignSelf: 'flex-end',
      top: 40,
      right: 20
      
    },
    semiButtonText: {
      color: '#FFFFFF',
      backgroundColor: 'transparent',
      fontSize: 14.6,
      margin: 15,
      marginTop: 2,
      left: 2,
      alignSelf: 'flex-start'
    },
    image: {
      flex: 1,
      width: 50,
      height: 50,
      position: 'absolute',
      left: 20,
      top: 15,
    },
    image2: {
      flex: 1,
      width: 68,
      height: 68,
      position: 'absolute',
      left: 10,
      top: 15,
    },
    image3: {
      flex: 1,
      width: 68,
      height: 68,
      position: 'absolute',
      // left: 10,
      // top: 15,
    },
  
    headerTitle: {
      width: '100%', 
      height: height,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
    },
  });
  

  export default styles;