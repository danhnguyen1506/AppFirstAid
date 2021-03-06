import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'
import commonStyles from '../common/Styles'

var {width, height} = Dimensions.get('window')
class Poison extends Component {

    static navigationOptions = ({ navigation }) => ({
            headerStyle:{
                backgroundColor:'white',
                marginBottom: -15,
                height: 0
            },
        })

        constructor(props) {
            super(props)
              YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
          }
        render() {
            return (
              <View style={styles.container}>
                <View style={styles.headerTitle}>
                  <Text style={styles.buttonText}>NHIỄM ĐỘC</Text>

                  <TouchableOpacity style={commonStyles.goBack}
                    onPress = {() => this.props.navigation.goBack()}>
                    <Icon name = 'ios-undo' type='ionicon' size={35}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={commonStyles.toLogin}
                    onPress = {() => this.props.navigation.navigate('Login')}>
                    <Icon name = 'home' type='entyco' size={35}/>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Poison1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../../assets/image/nuot.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nuốt</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Poison2')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../../assets/image/hitphaikhidoc.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Hít phải khí độc</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Poison3')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../../assets/image/bitiemvaotrong.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Bị tiêm vào trong</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Poison4')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../../assets/image/nhiemdoctrenda.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Nhiễm độc trên da</Text>
                </TouchableOpacity>

              </View>
            )
          }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#2699FB',
    fontSize: 26
  },
  
  buttonText1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 28,
    alignSelf: 'center',
  },

  image: {
    flex: 1,
    width: width/1.3,
    height: height/5.65,
    // marginTop: 20,
    alignSelf: 'center',
    justifyContent:'center',
    
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width/1.3,
    height: height/5.65,
    
  },

  button: {
    marginBottom: 16,
    marginRight: 5,
    marginLeft: 5,
    width: width/1.3,
    height: height/5.65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  headerTitle: {
    width: '100%', 
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 50,
    top: 20,
  },
})

export default Poison