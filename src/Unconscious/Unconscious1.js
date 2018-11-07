import React, { Component } from "react";
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
import PageControl from "react-native-page-control";
import { Icon } from "react-native-elements";
import * as gifs from "../common/gifs";

var { width, height } = Dimensions.get("window");
var SoundPlayer = require("react-native-sound");
import MusicPlayer from '../controller/Player';
import BaseComponent from "../common/BaseComponent";
import commonStyles from '../common/Styles'

var song = null;
var list = [
  {
    id: 0,
    name: "unconscious11.mp3"
  },
  {
    id: 1,
    name: "unconscious12.mp3"
  },
  {
    id: 2,
    name: "unconscious21.mp3"
  },
  {
    id: 3,
    name: "unconscious22.mp3"
  }
];

class Unconscious1 extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      mute: false,
      name: "",
      icon: "unmute",
      stop: true,
      pause: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onPressButtonStop = this.onPressButtonStop.bind(this);
    this.onPressButtonMute = this.onPressButtonMute.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      if (song != null) {
        song.stop(() => (song = null));
      }
      return false;
    });
  }
  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange(currentAppState) {
    if (currentAppState == "background") {
      song.pause();
    }
    if (currentAppState == "active") {
      song.play();
    }
  }

  onPressButtonPlay() {
    if (song == null) {
      MusicPlayer.playFile("unconscious11.mp3");
      // song = new SoundPlayer(
      //   "unconscious11.mp3",
      //   SoundPlayer.MAIN_BUNDLE,
      //   () => {
      //     song.setNumberOfLoops(-1).play(
      //       () => song.release() //never called
      //     );
      //   }
      // );
    }
  }

  onPressButtonMute() {
    if (song != null) {
      if (this.state.mute) {
        song.setVolume(1);
        this.setState({ icon: "unmute" });
      } else {
        song.setVolume(0);
        this.setState({ icon: "mute" });
      }
      this.setState({ mute: !this.state.mute });
    }
  }

  onPressButtonStop(state) {
    if (this.state.icon === "unmute") {
      if (state === "idle") {
        song.stop().release();
        song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
          song.setNumberOfLoops(-1).play(() => song.release());
        });
      } else song.stop();
    }
  }

  handleChange({ nativeEvent }) {
    let change = nativeEvent.position;
    if (this.state.currentPage !== change) {
      this.setState({
        currentPage: change,
        name: list
          .filter(s => s.id === change)
          .map(s => s.name)
          .toString(),
        icon: "unmute",
        mute: false
      });
    }
    // else this.setState({name: list.filter(s=>s.id === change).map(s=>s.name).toString(),
    //   icon: 'unmute', mute: false
    // })
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.headerTitle}>
          <Text style={commonStyles.buttonText}>BẤT TỈNH</Text>

          <TouchableOpacity
            style={commonStyles.goBack}
            onPress={() =>
              this.props.navigation.goBack() && song.stop((song = null))
            }
          >
            <Icon name="ios-undo" type="ionicon" size={35} />
          </TouchableOpacity>

          <TouchableOpacity
            style={commonStyles.toLogin}
            onPress={() =>
              this.props.navigation.navigate("Login") &&
              song.stop((song = null))
            }
          >
            <Icon name="home" type="entyco" size={35} />
          </TouchableOpacity>
        </View>

        <PageControl
          style={commonStyles.pageControl}
          numberOfPages={5}
          currentPage={this.state.currentPage}
          pageIndicatorTintColor="white"
          currentPageIndicatorTintColor="#2699FB"
          indicatorStyle={{
            borderRadius: 5,
            borderColor: "#C2C2C2",
            borderWidth: 1
          }}
          currentIndicatorStyle={{ borderRadius: 5 }}
          indicatorSize={{ width: 9, height: 9 }}
        />
        <ViewPagerAndroid
          style={commonStyles.container}
          initialPage={0}
          peekEnable={true}
          pageMargin={-width + width / 1.09}
          loadMinimal={true}
          loadMinimalSize={3}
          onPageSelected={this.handleChange}
          onPageScrollStateChanged={this.onPressButtonStop}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center" }}
            onLayout={this.onPressButtonPlay}
          >
            <View style={commonStyles.slide1}>
              <Image style={commonStyles.image} source={gifs.unconscious1_1} />
              <Text
                style={commonStyles.barbell}
              />
              <Text style={commonStyles.semiButtonText}>
                Kiểm tra các mối nguy hiểm xung quanh. Đảm bảo an toàn cho bản
                thân.
              </Text>
              <TouchableOpacity
                style={commonStyles.muteButton}
                onPress={this.onPressButtonMute.bind(this)}
              >
                <View style={commonStyles.overlay} />
                <Icon
                  name={this.state.icon}
                  type="octicon"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={commonStyles.slide1}>
              <Image
                style={commonStyles.image} source={gifs.unconscious1_2}/>
              <Text
                style={{
                  width: 50,
                  height: 6,
                  marginTop: 2,
                  marginBottom: 10,
                  backgroundColor: "#2699FB",
                  alignSelf: "flex-start"
                }}
              />
              <Text style={commonStyles.semiButtonText}>
                Tiến vào kiểm tra phản ứng của nạn nhân. Nếu nạn nhân không phản
                ứng, gọi cấp cứu 115 và gọi thêm người trợ giúp.
              </Text>
              <TouchableOpacity
                style={commonStyles.muteButton}
                onPress={this.onPressButtonMute.bind(this)}
              >
                <View style={commonStyles.overlay} />
                <Icon
                  name={this.state.icon}
                  type="octicon"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ justifyContent: "center", alignItems: "center" }}
            onLayout={this.onPressButtonPlay}
          >
            <View style={commonStyles.slide1}>
              <Image
                style={commonStyles.image} source={gifs.unconscious2_1}
              />
              <Text
                style={{
                  width: 50,
                  height: 6,
                  marginTop: 2,
                  marginBottom: 10,
                  backgroundColor: "#2699FB",
                  alignSelf: "flex-start"
                }}
              />
              <Text style={commonStyles.semiButtonText}>
                Hỏi lớn “Anh/ chị/ em/ cô/ chú ơi có sao không?”.
              </Text>

              <TouchableOpacity
                style={commonStyles.muteButton}
                onPress={this.onPressButtonMute.bind(this)}
              >
                <View style={commonStyles.overlay} />
                <Icon name={this.state.icon} type="octicon" size={25} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={commonStyles.slide1}>
              <Image
                style={commonStyles.image} source={gifs.unconscious2_2}
              />
              <Text
                style={{
                  width: 50,
                  height: 6,
                  marginTop: 2,
                  marginBottom: 10,
                  backgroundColor: "#2699FB",
                  alignSelf: "flex-start"
                }}
              />
              <Text style={commonStyles.semiButtonText}>
                Nếu nạn nhân không có phản ứng, tiếp tục hỏi lớn và lắc mạnh vai
                hoặc đập vào mu bàn tay.
              </Text>

              <TouchableOpacity
                style={commonStyles.muteButton}
                onPress={this.onPressButtonMute.bind(this)}
              >
                <View style={commonStyles.overlay} />
                <Icon
                  name={this.state.icon}
                  type="octicon"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={commonStyles.slide1}>
              <Text style={[commonStyles.buttonText, { top: 20 }]}>
                TÌNH TRẠNG HIỆN TẠI CỦA NẠN NHÂN?
              </Text>
              <View style={{ marginTop: height / 2.3 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Unconscious4") &&
                    song.stop(() => (song = null))
                  }
                  style={commonStyles.button}
                >
                  <View>
                    <Text style={commonStyles.text}>Còn ý thức</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Unconscious3") &&
                    song.stop(() => (song = null))
                  }
                  style={commonStyles.button}
                >
                  <View>
                    <Text style={commonStyles.text}>Mất ý thức</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF"
//   },
//   buttonText: {
//     fontWeight: "bold",
//     color: "#2699FB",
//     fontSize: 26
//   },
//   semiButtonText: {
//     color: "black",
//     fontSize: 17
//   },
//   text: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 15
//   },
//   slide1: {
//     alignItems: "center",
//     flex: 1,
//     width: "90%",
//     padding: "5.5%",
//     paddingTop: 0,
//     // shadowColor: '#000',
//     shadowOffset: { width: 0, height: 0 },
//     // shadowOpacity: 2,
//     shadowRadius: 20,
//     elevation: 1,
//     borderColor: "white",
//     marginTop: "2.5%",
//     marginBottom: "8%",
//     backgroundColor: "#FFFFFF"
//   },
//   image: {
//     width: "114%",
//     height: "65%",
//     marginBottom: "5%"
//   },

//   button: {
//     marginBottom: 20,
//     marginRight: 5,
//     marginLeft: 5,
//     width: width / 1.3,
//     height: height / 10.5,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#2196F3",

//     backgroundColor: "white",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//     borderColor: "blue"
//   },
//   headerTitle: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 30,
//     top: 20
//   },
//   overlay: {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     opacity: 0.5,
//     backgroundColor: "#707070",
//     width: 40,
//     height: 40,
//     borderRadius: 20
//   }
// });

export default Unconscious1;
