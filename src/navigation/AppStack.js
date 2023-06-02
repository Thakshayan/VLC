import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

// Screens
import ContactScreen from "../screens/ContactScreen";
import SendStack from "./SendStack";
import appStyles from "../styles/appStyles";
import ReadStack from "./ReadStack";



const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    
      
      <Tab.Navigator
        initialRouteName={"HomeStack"}
        screenOptions={({ route }) => ({
          tabBarStyle: { ...styles.tabBarNormal },
          tabBarLabelStyle: {
            paddingBottom: 10,
            paddingTop: 0,
            marginTop: -5,
            fontSize: 11,
          },
          headerStyle: appStyles.headerStyle,
          headerTitleAlign: "center",
        })}
      >
        <Tab.Screen
          name={"HomeStack"}
          component={ContactScreen}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={"SendStack"}
          component={SendStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <FontAwesome
                  name={focused ? "send" : "send-o"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={"ReadStack"}
          component={ReadStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <Ionicons
                  name={focused ? "scan" : "scan-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
  
  );
}

const styles = StyleSheet.create({
  tabBarNormal: {
    height: 70,
    backgroundColor: "#ffffff",
  },
  tabBar: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 70,
  },
  tabBarShadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppStack;
