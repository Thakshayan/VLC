import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useEffect, useState } from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import ReadImage from "../../assets/svg/ReadBackground";


//custom hooks
import useStyle from "../../hooks/useStyles";


export default function SendScreen({ navigation }) {

  const styles = useStyle(customStyles);

  const [message, setMessage] = useState("");

  const onSend = () => {
    navigation.navigate("Sending", { message });
  };

  return (
    
      
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <ReadImage
              height={300}
              style= {styles.background}
              
          />
        <Text>Hi</Text>
        <KeyboardAvoidingView style={styles.content}>
          <KeyboardAwareScrollView >
         
          
          <View style={styles.buttonContainer}>
          

          <TextInput
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            multiline={true}
            style={styles.inputMessage}
          />
         
            <TouchableOpacity
              style={styles.readMessage} 
              onPress={onSend} 
              disabled = {!message}            
            >      
              <Text style={styles.buttonText}>
                  Send
                
              </Text>
              <FontAwesome
                name={ "send" }
                size={20}
                color={"white"}
                style={styles.messageIcon}
              />
            </TouchableOpacity>
          
          </View>
          
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
       
        </View>
      </View>
    
    
  );
}

const customStyles = theme => ({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignContent:'center',
    justifyContent: "center",
    
  },
  content:{
    position: "relative",
    zIndex: 1,
  },
  inputMessage:{
    height: 45,
    fontSize: 14,
    
    borderWidth: 1,
    borderColor: theme.colors.primary, //"#eaeaea",
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5,
   
    marginRight:0,
    paddingLeft: 15,
    width:'60%'
  },
  readMessage:{
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5,
    backgroundColor:theme.colors.primary,
    
    width:"20%",
    
  },
  buttonText:{
    color:'#ffffff',
    paddingRight:5
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    zIndex: 0
  },


 
});
