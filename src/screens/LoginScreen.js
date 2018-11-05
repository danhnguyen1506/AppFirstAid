import React, {Component} from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, Image, Dimensions, Button } from 'react-native';
import { YellowBox } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';

import styles from './LoginScreenStyleSheet';

import BaseComponent from '../common/BaseComponent';

var {width, height} = Dimensions.get('window')

export default class LoginScreen extends BaseComponent {

  static navigationOptions = ({ navigation }) => ({
    // headerTitle:<LinearGradient colors={['#00EEA9','#3E56EF']} 
    // start={{x: 1, y: 0.25}} end={{x: 0.25, y: 1.0}}
    // locations={[0.1,0.9]}
    // style={styles.headerTitle}>
    //   <Text style={[styles.semiButtonText, {fontSize: 30,fontWeight: 'bold'}]}>SƠ CẤP CỨU</Text>
    //   <Text style={styles.semiButtonText}>Ứng dụng chỉ mang tính chất tham khảo và hỗ trợ, không thay thế được việc đào tạo sơ cấp cứu và thực hành thường xuyên.</Text>
    // </LinearGradient>,
    //  headerTitleStyle : {flex: 1, textAlign: 'center', alignSelf:'center'},
    //     headerStyle:
    //     { 
    //         height: height/2.7,
    //         marginBottom: -height/20,
    //     }
  })

  constructor(props) {
    super(props)
      this.state = { isOpen: false }
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => this.push('CaseSelection')}
          style={styles.button}>
              <Image style={[styles.image, {tintColor: '#2A47FF'}]} source={require('../../assets/image/eme_aid.jpg')}/>
              <Text style={styles.buttonText}>HƯỚNG DẪN CẤP TỐC</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.push('Importantnotificant')}
          style={styles.button}>
              <Image style={styles.image} source={require('../../assets/image/learn.jpg')}/>
              <Text style={styles.buttonText}>HỌC SƠ CẤP CỨU</Text>
          </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.push('Introduction')}
          style={[styles.button1,{marginRight: 5}]}>
            <Image style={[styles.image2, {tintColor: '#2A47FF', top: 10}]} source={require('../../assets/image/about_us.jpg')}/>
             <Text style={[styles.buttonText]}>GIỚI THIỆU</Text>
          </TouchableOpacity>
          
          <TouchableHighlight
          underlayColor='transparent'
          onPress={() => this.setState({isOpen: true})} style={styles.btn}
          // onShowUnderlay={() => this.setState({showPopup: true}) && this.handleOnpressView}
          style={[styles.button1, {marginLeft: 5}]}>
          <View style={[{width: '100%', height: '100%', justifyContent: 'center'}]}>
             <Image style={[styles.image2, {height: 55, width: 55}]} source={require('../../assets/image/sos.jpg')}/>
             <Text style={[styles.buttonText,{top: 30}]}>CỨU TRỢ</Text>
             <Text style={[styles.buttonText,{top: 30}]}>KHẨN CẤP</Text>
          </View>
          </TouchableHighlight>
        </View>

        <Modal isOpen={this.state.isOpen}
          coverScreen={true}
          onClosed={() => this.setState({isOpen: false})}
          style={[styles.modal]}
          position={"center"}
          backdropOpacity={0.6}>
          
          <View style={{width: '95%', height: '50%',
        justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#2A47FF', fontWeight: 'bold', fontSize: 40, elevation: 1}}>COMING SOON</Text>
            <Image style={{position: 'absolute', width: 145, height: 155, backgroundColor: 'transparent'}} 
        source={require('../../assets/image/socapcuu.jpg')}/>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', top: height/24}}>
            <Text style={{color: '#2699FB', fontSize: 14}}>Tính năng đang được phát triển</Text>
            <Text style={{color: '#2699FB', fontSize: 14}}>và sẽ được cập nhập trong thời gian sớm nhất</Text>
          </View>

          <TouchableOpacity style={{backgroundColor: '#2844F5',
           width: '92%', height: '15%', justifyContent: 'center', alignItems: 'center', top: height/50}}>
            <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>QUAY LẠI TRANG CHỦ</Text>
          </TouchableOpacity>
        </Modal>

      </View>
    );
  }
}

