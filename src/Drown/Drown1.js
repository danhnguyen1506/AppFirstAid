import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
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
    name: 'drown1.wav'
  },
  {
    id: 1,
    name: 'drown2.wav'
  },
]

class Drown1 extends Component {
    
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
          mute: false, name: '', icon: 'unmute', stop: true
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        this.handleChange = this.handleChange.bind(this)
        // this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        if (song != null) {song.stop(()=> song = null)}
        return false;
      });
      AppState.removeEventListener('change', this.handleAppStateChange);
    }
    componentDidMount(){
      AppState.addEventListener('change', this.handleAppStateChange)
    }
    handleAppStateChange(currentAppState) {
      if(currentAppState == "background") {
          song.pause();
      } 
      if(currentAppState == "active") {
          song.play();
      }
    }

    onPressButtonPlay() {
        if(song == null){
            song = new SoundPlayer('drown1.wav', SoundPlayer.MAIN_BUNDLE, () => {
                    song.setNumberOfLoops(-1).play(()=>song.stop())
            });
            
        }
    }
    
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
          <Text style={styles.buttonText}>ĐUỐI NƯỚC</Text>
          <Text style={styles.text}>Xử lý đuối nước</Text>

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
          numberOfPages={3}
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
                  <Image style={commonStyles.image} source={require('../../assets/gif/drown/drown1_1.gif')}/>
                  <Text style={commonStyles.barbell}></Text>
                  <Text style={styles.semiButtonText}>
                  Khi thấy nạn nhân có dấu hiệu đuối nước, nhanh chóng thảy cho nạn nhân bất 
                  cứ vật gì nạn nhân có thể bám vào và nổi lên được
                  </Text>

                  
                    <TouchableOpacity style={commonStyles.muteButton} onPress={this.onPressButtonMute.bind(this)}>
                      <View style={commonStyles.overlay}/>
                      <Icon name = {this.state.icon} type='octicon' size={25}/>
                    </TouchableOpacity>
           
                </View>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={commonStyles.slide1}>
                  <Image style={commonStyles.image} source={require('../../assets/gif/drown/drown1_2.gif')}/>
                  <Text style={commonStyles.barbell}></Text>
                  <Text style={styles.semiButtonText}>
                  Sau khi đưa nạn nhân đuối nước lên bờ an toàn, kiểm tra phản ứng và hơi thở nạn nhân.
                  </Text>

                  

                    <TouchableOpacity style={commonStyles.muteButton} onPress={this.onPressButtonMute.bind(this)}>
                      <View style={commonStyles.overlay}/>
                      <Icon name={this.state.icon} type='octicon' size={25} color='#000000'/>

                    </TouchableOpacity>
         
                </View>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={commonStyles.slide1}>
                  <Text style={[styles.buttonText, {marginTop: 20, marginBottom: -25,fontSize: 26}]}>TÌNH TRẠNG HIỆN TẠI CỦA NẠN NHÂN?</Text>

                    <View style={{ marginTop: height/2.3 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Drown2')}
                        style={styles.button}>
                            <View>
                                <Text style={styles.text2}>Còn Thở</Text>
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
        fontSize: 18,
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
      fontSize: 15
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
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

export default Drown1