import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

FontAwesome.loadFont();
Feather.loadFont();

export const SignInScreen = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    passwordIconName: 'eye',
  });

  const handleTogglePasswordVisibility = () => {
    setData(prevState => ({
      ...prevState,
      passwordIconName:
        prevState.passwordIconName === 'eye-off' ? 'eye' : 'eye-off',
      secureTextEntry: !prevState.secureTextEntry,
    }));
  };

  const handleTextChange = (text: string) => {
    if (text.length) {
      setData(prevData => ({
        ...prevData,
        check_textInputChange: true,
        email: text,
      }));
    } else {
      setData(prevData => ({
        ...prevData,
        check_textInputChange: false,
        email: text,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={handleTextChange}
          />
          {data.check_textInputChange && (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          )}
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />

          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <Feather name={data.passwordIconName} color="grey" size={20} />
          </TouchableOpacity>
        </View>
        <View >
            <TouchableOpacity style={styles.button} >
            <LinearGradient
           colors={['#08d4c4', '#01ab9d']}
           style={styles.signIn}
           >
                <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
