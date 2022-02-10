import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from 'react';
import { Switch } from 'react-native-paper';

export default function App() {
  const Switchie = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
  };

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 25,}}>
        <Text style={styles.largeText}>Settings</Text>
        <TextInput style={styles.textInput} placeholder="Search"></TextInput>
        <TouchableOpacity style = {styles.rectangle}>
          <View style = {styles.circle}>
            <Text style={{ marginLeft: 12.5, marginTop: 12.5,}}>CL</Text>
          </View>
          <View>
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 24,}}>Caleb Lee</Text>
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 14,}}>Apple ID, iCloud, Media & Purchases</Text>
          </View>
          <Text style={{ marginLeft: "auto", marginTop: 15,}}>></Text>
        </TouchableOpacity>
        <View style={{backgroundColor: "white", marginTop: 50, padding: 12.5, borderRadius: 7.5,}}>
          <View>
            <View style ={{ flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "F79630"}}>
              <Ionicons name="airplane" color="FFF" size={20} style ={{ marginLeft: 2.5, marginBottom: 2}}/>
              <Text style= {{ fontWeight: "bold", }}>Airplane Mode</Text>
              <View style={{marginLeft: "auto"}}>
                <Switchie></Switchie>
              </View>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: "white", marginTop: 50, padding: 12.5, borderRadius: 7.5,}}>
          <View>
            <View style ={{ flexDirection: "row", marginLeft: 5, height: 25, width: 25, borderRadius: 7.5, backgroundColor: "F79630"}}>
              <Ionicons name="wifi" color="FFF" size={20} style ={{ marginLeft: 2.5, marginBottom: 2}}/>
              <Text style= {{ fontWeight: "bold", }}>Wi-Fi</Text>    
              <View style= {{ marginLeft: "auto",}}>
                <Text style={{ marginLeft: "auto", marginTop: 15,}}>Quick Puppy ></Text>
              </View>

            </View>
          </View> 
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: "#F0F0F0",
  },
  largeText: {
    fontWeight: "bold",
    fontSize: 36,
  },
  textInput: {
    backgroundColor: "lightgray",
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
  },
  rectangle: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  circle: {
    backgroundColor: "lightgray",
    height: 50,
    width: 50,
    borderRadius: 25,
  }
});
