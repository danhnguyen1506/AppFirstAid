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
    name: 'bleeding12.wav'
  },
]

class Bleeding12 extends Component {
    
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
        this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)

    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        // if (song != null) {song.stop(()=> song = null)}
        return false;
      });
      // AppState.removeEventListener('change', this.handleAppStateChange);
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
            song = new SoundPlayer('bleeding12.wav', SoundPlayer.MAIN_BUNDLE, () => {
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
          <Text style={styles.buttonText}>CHẢY MÁU MŨI</Text>

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
          numberOfPages={1}
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
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={commonStyles.slide1}>
                  <Image style={commonStyles.image} source={require('../../assets/gif/bleeding/bleeding12.gif')}/>
                  <Text style={commonStyles.barbell}></Text>
                  <Text style={styles.text}>
                  Xử lý chảy máu mũi hoặc chảy máu cam
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Cho nạn nhân ngồi, đầu hơi cúi về phía trước. Dùng ngón tay trỏ và 
                  ngón tay cái bóp phần mềm trên 2 cánh mũi.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Nếu máu vẫn còn nhỏ giọt ra sàn thì điều chỉnh vị trí của tay và 
                  tăng áp lực lên mũi.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Nếu máu mũi chảy nhiều sau 5 phút, dùng đá lạnh chườm vào sau 2 
                  gáy nạn nhân giúp cầm máu mũi nhanh hơn.
                  </Text>

                  
                    <TouchableOpacity style={commonStyles.muteButton} onPress={this.onPressButtonMute.bind(this)}>
                      <View style={commonStyles.overlay}/>
                      <Icon name = {this.state.icon} type='octicon' size={25}/>
                    </TouchableOpacity>
         
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
        fontSize: 26
    },
    
    semiButtonText: {
        color: 'black',
        fontSize: height/45.5,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
      bottom: 3,
      alignSelf:'flex-start'
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

export default Bleeding12