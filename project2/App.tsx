import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,ImageBackground } from 'react-native';
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Text style={{ fontSize:35,marginTop:50,color:'green'}}>PMAS UAAR</Text>
      <Image source={require('./1.jpg')}
      style={{ width: 150, height: 200,marginTop:30 }} />
      <Text style={{ fontSize:20,margin:10}}> Name : Maskeen Chaudry</Text>
      <Text style={{ fontSize:20,margin:10}}>  Arid id : 19-arid-1257</Text>
      <Text style={{ fontSize:20,margin:10}}>Degree:   BSSE          </Text>
      <Text style={{ fontSize:20,margin:10}}>Department : IT      </Text>
      <StatusBar style="auto" />
   
   
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop:50,
    flex: 1,
    backgroundColor: 'yellow',
   
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
