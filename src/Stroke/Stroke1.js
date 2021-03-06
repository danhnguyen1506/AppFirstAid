import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'
// import SoundPlayer from 'react-native-sound';
// import BaseComponent from '../common/BaseComponent';
import commonStyles from '../common/Styles'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
var song = null;
var list = [
  {
    id: 0,
    name: 'stroke1.mp3'
  },
]

class Stroke1 extends Component {
    
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

    onPressButtonPlay() {
        if(song == null){
            song = new SoundPlayer('stroke1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                song.setNumberOfLoops(-1).play(()=>song.release())
            });
            
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

    
render() {
    
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.headerTitle}>
          <Text style={styles.buttonText}>ĐỘT QUỴ</Text>
          <Text style={styles.text}>Các dấu hiệu và triệu chứng nhận diện đột quỵ</Text>

          <TouchableOpacity style={commonStyles.goBack}
            onPress = {() => this.props.navigation.goBack() && song.stop(song = null)}>
            <Icon name = 'ios-undo' type='ionicon' size={35}/>
          </TouchableOpacity>

          <TouchableOpacity style={commonStyles.toLogin}
            onPress = {() => this.props.navigation.navigate('Login') && song.stop(song = null)}>
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
            loadMinimalSize={1}
            onPageSelected = {this.handleChange}
            onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}} onLayout={this.onPressButtonPlay}>
                <View style={commonStyles.slide1}>
                  <Image style={commonStyles.image} source={require('../../assets/gif/stroke/stroke1.gif')}/>
                  <Text style={commonStyles.barbell}></Text>
                  <Text style={styles.semiButtonText}>
                  Nạn nhân thấy nhức đầu, yếu hoặc tê vùng mặt, tay, chân,chóng mặt, mất thăng bằng, 
                  mắt mờ, khó nói chuyện. Ngay lập tức kiểm tra xem:
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Nạn nhân mặt có bị méo xệ 1 bên hay không.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Nạn nhân có thể nhấc cả 2 tay và giữ trong 10 giây được hay không.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Nạn nhân có thể nói chuyện bình thường, cử động miệng lưỡi bình thường được 
                  hay không.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Nếu có 1 trong những dấu hiệu trên, lập tức đưa nạn nhân đi cấp cứu.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Nếu phát hiện nạn nhân quá trễ, nạn nhân có dấu hiệu ngưng tim, cần gọi 
                  cấp cứu 115, và ngay lập tức làm thao tác hồi sinh tim phổi CPR cho nạn nhân 
                  trong chờ xe cấp cứu đến.
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

    buttonText: {
        fontWeight: 'bold',
        color: '#2699FB',
        fontSize: 17
    },
    semiButtonText: {
        color: 'black',
        fontSize: height/60,
        alignSelf: 'flex-start',
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 11,
      bottom: 2
    },
    
})

export default Stroke1