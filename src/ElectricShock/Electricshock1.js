import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, AppState } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'
import commonStyles from '../common/Styles'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
// SoundPlayer.setCategory('Playback', true)
var song = null;
var list = [
  {
    id: 0,
    name: 'es1.wav'
  },
]

class Electricshock1 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
            headerStyle:{
                backgroundColor:'white',
                marginBottom: -15,
                height: 0
            },
        })
    
    constructor(props) {
      super(props)
        this.state={currentPage: 0,
          mute: false, name: '', icon: 'unmute', stop: true, appState: AppState.currentState
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        this.handleChange = this.handleChange.bind(this)
        // this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        // if (song != null) {song.stop(()=> song = null)}
        return false;
      });
      AppState.removeEventListener('change', this.handleAppStateChange);
      // AppState.addEventListener('change', this.handleAppStateChange)
    }
    // componentDidMount(){
      
    // }

    handleAppStateChange(currentAppState) {
      if(currentAppState == "background" || currentAppState == "inactive") {
          song.stop()
      } 
      if(currentAppState == "active") {
        song.play()
      }
    }

    onPressButtonPlay() {
        if(song == null){
            song = new SoundPlayer('es1.wav', SoundPlayer.MAIN_BUNDLE, () => {
                    song.setNumberOfLoops(-1).play(()=>song.stop())
            });  
        }
    }

    // onPressButtonPause() {
    //   // if(song != null) {
    //   //   if(this.state.pause) // play resume
    //   //     song.play();
    //   //   else 
    //     song.pause();
  
    //     this.setState({pause: true});
    //   // }
    // }  
    
    onPressButtonMute() {
      if(song != null) {
        if(this.state.mute) {// play resume
          song.setVolume(1)
          this.setState({icon: 'unmute'})}
        else {song.setVolume(0);
          this.setState({icon: 'mute'})
        }
        this.setState({mute: !this.state.mute});
      }
    }

    onPressButtonStop(state) {
        if(this.state.icon === "unmute"){
            if (state === "idle") {
                song.stop().release()
                song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
                    song.setNumberOfLoops(-1).play(()=>song.release())
                });
            }
            else song.stop()
        }
    //     // else {
    //     //     if (state === "idle") {
    //     //         song.stop().release()
    //     //         song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
    //     //             song.setNumberOfLoops(-1).play(()=>song.release())
    //     //         });
    //     //         song.setVolume(0)
    //     //     }
    //     //     else song.stop()
    //     // }
    }

    handleChange({nativeEvent}) {
      let change = nativeEvent.position
      if (this.state.currentPage !== change) {
        this.setState({currentPage: change, 
          name: list.filter(s=>s.id === change).map(s=>s.name).toString(),
          icon: 'unmute', mute: false
        })
      }
    }
    
render() {
    
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.headerTitle}>
          <Text style={styles.buttonText}>ĐIỆN GIẬT</Text>
          <Text style={styles.text}>Xử lý sự cố điện giật</Text>

          <TouchableOpacity style={commonStyles.goBack}
            onPress = {() => this.props.navigation.goBack()}>
            <Icon name = 'ios-undo' type='ionicon' size={35}/>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.toLogin}
            onPress = {() => this.props.navigation.navigate('Login')}>
            <Icon name = 'home' type='entyco' size={35}/>
          </TouchableOpacity>
        </View>
        <PageControl
          style={commonStyles.pageControl}
          numberOfPages={2}
          currentPage={this.state.currentPage}
          pageIndicatorTintColor='white'
          currentPageIndicatorTintColor='#2699FB'
          indicatorStyle={{borderRadius: 5, borderColor:'#C2C2C2', borderWidth: 1}}
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:9, height:9}}
          />
        <ViewPagerAndroid
            style={commonStyles.container}
            initialPage={0}
            peekEnable={true}
            pageMargin={-width + width/1.09}
            loadMinimal={true}
            loadMinimalSize={3}
            onPageSelected = {this.handleChange}
            // onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={commonStyles.slide1}>
                  <Image style={commonStyles.image} source={require('../../assets/gif/electricshock/electricshock1.gif')}/>
                  <Text style={commonStyles.barbell}></Text>
                  <Text style={styles.semiButtonText}>
                  Ngay lập tức tắt nguồn điện, hoặc nếu không tắt được nguồn điện, tìm cách di dời nguồn điện, 
                  hoặc chuyển nạn nhân ra khỏi nguồn điện bằng 1 vật dụng cách điện khô ráo như thanh gỗ hoặc nhựa.
                  </Text>
                    <TouchableOpacity style={commonStyles.muteButton} onPress={this.onPressButtonMute.bind(this)}>
                      <View style={commonStyles.overlay}/>
                      <Icon name = {this.state.icon} type='octicon' size={25}/>
                    </TouchableOpacity>
               
                </View>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={commonStyles.slide1}>
                
                  <Text style={[styles.buttonText, {fontSize: 26, marginTop: 20, marginBottom: -height/70}]}>TÌNH TRẠNG HIỆN TẠI CỦA NẠN NHÂN?</Text>

                    <View style={{ marginTop: height/2.3 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious4')}
                        style={styles.button}>
                            <View>
                                <Text style={styles.text2}>Còn thở</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious10')}
                        style={styles.button}>
                            <View>
                                <Text style={styles.text2}>Không thở</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
          </ViewPagerAndroid>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#2699FB',
        fontSize: 17
    },
    semiButtonText: {
        color: 'black',
        fontSize: 16,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
      bottom: 3
    },
    text2: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
    },
    
    slide1: {
        alignItems:'center',
        flex: 1,
        width: '90%',
        padding: '5.5%',
        paddingTop: 0,
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 2,
        shadowRadius: 20,
        elevation: 1,
        borderColor:'white',
        marginTop: '2.5%',
        marginBottom: '8%',
        backgroundColor:'#FFFFFF'
    },

    image: {
      width: '114%',
      height: '65%',
      marginBottom: '5%',
    },


    button: {
      marginBottom: 20,
      marginRight: 5,
      marginLeft: 5,
      width: width/1.3,
      height: height/10.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2196F3',
      
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      borderColor: 'blue',
    },
    
    headerTitle: {
      width: '100%', 
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 30,
      top: 20,
    },
    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: '#707070',
      width: 40,
      height: 40,
      borderRadius: 20,
    },
})

export default Electricshock1