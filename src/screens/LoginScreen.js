import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import useStyle from '../hooks/useStyles';
import { AuthContext } from '../contexts/AuthProvider';
import Login from '../assets/svg/login';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LoginScreen = ({navigation}) => {
  
  const {isLoggedIn, login, logout} = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required('User Name is required'),
    password: yup.string()
    .required('Password is required')
    // .min(8, 'Password must be at least 8 characters long')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    // ),
  });

  const {   setValue, register, handleSubmit,  formState: { errors }, getValues, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '', 
      password: '', 
    },
  });

  const handleLoginPress = (data) => {
    login()
  };

  const styles = useStyle(customStyles)

  return (
  <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Login
          height="250"
          width="250"
          style={styles.logo}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            name = "username"
            autoCapitalize="none"
            onChangeText={(text) => setValue('username',  text )}
            label='UserName'
          />
        </View>
        { errors.username ?            
          <Text style={styles.errorMsg}>{errors.username?.message }</Text>
          :
          null
        }
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            name = "password"
            onChangeText={(text) => setValue('password',  text )}
            secureTextEntry={true}
          />
        </View>
        {   errors.password?.message ?
          <Text style={styles.errorMsg}>{errors.password?.message}</Text>
          :
          null
        }
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLoginPress)}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAwareScrollView> 
  );
};

const customStyles = theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom:10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
    resizeMode: 'contain',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  errorMsg:{
    color: theme.colors.danger,
    fontSize: 14,
  }
});

export default LoginScreen;