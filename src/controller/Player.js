var SoundPlayer = require("react-native-sound");

class MusicPlayer {
  player = null;

  release() {}

  playFile(fileName) {
    if (player != null) {
      //release
    }
    let player = new SoundPlayer(fileName, SoundPlayer.MAIN_BUNDLE, error => {
      if (error == null) {
        player.play(success => {
          if (success) {
            console.log("successfully finished playing");
          } else {
            console.log("playback failed due to audio decoding errors");
            // reset the player to its uninitialized state (android only)
            // this is the only option to recover after an error occured and use the player again
            player.reset();
          }
        });
      }
    });
    this.player = player;
    player.setVolume(1);
  }
  
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      if (player != null) {
        player.stop(() => (player = null));
      }
      return false;
    });
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange(currentAppState) {
    if (currentAppState == "background") {
      player.pause();
    }
    if (currentAppState == "active") {
      player.play();
    }
  }
  onPressButtonMute() {
    if(player != null) {
      if(this.state.mute) {// play resume
        player.setVolume(1)
        this.setState({icon: 'unmute'})}
      else {player.setVolume(0);
        this.setState({icon: 'mute'})
      }
      this.setState({mute: !this.state.mute});
    }
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
}

let controller = new MusicPlayer();
export default controller;
