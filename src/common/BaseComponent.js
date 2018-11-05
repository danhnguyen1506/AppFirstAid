import React, { Component } from "react";
import { YellowBox } from "react-native";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ViewPagerAndroid,
  BackHandler,
  Dimensions,
  DeviceEventEmitter,
  AppState
} from "react-native";

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader"
    ]);
  }

  push(screen) {
    this.props.navigation.navigate(screen);
  }

  
}
