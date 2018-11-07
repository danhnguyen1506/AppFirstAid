import { StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");

let commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    buttonText: {
      fontWeight: "bold",
      color: "#2699FB",
      fontSize: 26
    },
    semiButtonText: {
      color: "black",
      fontSize: 17
    },
    text: {
      color: "black",
      fontWeight: "bold",
      fontSize: 15
    },
    slide1: {
      alignItems: "center",
      flex: 1,
      width: "90%",
      padding: "5.5%",
      paddingTop: 0,
      // shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      // shadowOpacity: 2,
      shadowRadius: 20,
      elevation: 1,
      borderColor: "white",
      marginTop: "2.5%",
      marginBottom: "8%",
      backgroundColor: "#FFFFFF"
    },
    image: {
      width: "114%",
      height: "65%",
      marginBottom: "5%"
    },
  
    button: {
      marginBottom: 20,
      marginRight: 5,
      marginLeft: 5,
      width: width / 1.3,
      height: height / 10.5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#2196F3",
  
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      borderColor: "blue"
    },
    headerTitle: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      top: 20
    },
    overlay: {
      position: "absolute",
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: "#707070",
      width: 40,
      height: 40,
      borderRadius: 20
    },
    goBack: {
      position: "absolute",
      alignSelf: "flex-end",
      left: 20,
      width: 50,
      height: 50,
      justifyContent: "center"
    },
    toLogin: {
      position: "absolute",
      alignSelf: "flex-start",
      right: 20
    },
    pageControl: {
      position: "absolute",
      alignSelf: "flex-start",
      right: 30,
      bottom: 10,
      elevation: 1
    },
    barbell: {
      width: 50,
      height: 6,
      marginTop: 2,
      marginBottom: 10,
      backgroundColor: "#2699FB",
      alignSelf: "flex-start"
    },
    muteButton: {
      flex: 1,
      position: "absolute",
      marginTop: height / 2.6,
      margin: 15,
      height: 40,
      right: 0.1,
      width: 40,
      justifyContent: "center"
    }
  });

  export default commonStyles;