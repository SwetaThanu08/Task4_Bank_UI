import React from 'react';
import { StyleSheet,View,Text,ScrollView,Modal} from 'react-native';
import ActInd from './Components/ActInd';


export default function App() {
    return (

      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={[styles.text,{color:'black',fontWeight:'500',marginLeft:10}]}>PROFILE</Text>
          <Text style={[styles.text,{marginLeft:249,color:'black',fontSize:16,fontWeight:'500'}]}> HOME</Text>
        </View>

          <View style={styles.TopBox}>
              <View style={styles.midBox}><Text style={styles.text}>Send Money</Text></View>
              <Text style={[styles.BoxText,{marginLeft:18,marginTop:10,color:'white',fontWeight:'300'}]}>
                Spend just $1000 with Golden Sky card today and earn ✨5000✨ Bonus Points !</Text>
          </View>
    
        <View >
          <ScrollView horizontal>

            <View style={[styles.box,{backgroundColor:'#FF0D3C',marginLeft:6}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>    DEBIT CARD{'\n'}{'\n'}1234 5789 3092</Text></View>

            <View style={[styles.box,{backgroundColor:'#41FF4C'}]}>
              <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>   CREDIT CARD{'\n'}{'\n'}1234 5789 3092</Text></View>

            <View style={[styles.box,{backgroundColor:'#FF20AE'}]}>
              <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>   IDBI CARD{'\n'}{'\n'}1234 5789 3092</Text></View>

            <View style={[styles.box,{backgroundColor:'#41FEFF'}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>   ICICI CARD{'\n'}{'\n'}1234 5789 3092</Text></View>

            <View style={[styles.box,{backgroundColor:'#FF0D3C'}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>  HDFC CARD{'\n'}{'\n'}1234 5789 3092</Text></View>
            
          </ScrollView>

          <View style ={[styles.bottom,{height:4,backgroundColor:'#fff'}]}></View>
          
          <View style ={[styles.bottom,{backgroundColor:'#001379'}]}>

                <Text style={[styles.text,{color:'white',fontStyle:'normal',marginTop:13}]}>Transactions</Text>

                <View style={[styles.bottomBox,{marginTop:12}]}>
                      <Text style={styles.BoxText}>Emirates Airline</Text>
                </View>

                <View style={styles.bottomBox}><Text style={styles.BoxText}>Apple Store</Text></View>
                <View style={styles.bottomBox}><Text style={styles.BoxText}>Tranfer to Sweta</Text></View>
            
          </View>
          <ActInd/>

</View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#004',
    },
    text:{
      color:'#444',
      fontSize:16,
      marginLeft:22,
      marginTop:5,
      fontStyle:'italic',
    },
    BoxText:{
      color:'black',
      fontSize:18,
      marginLeft:100,
      marginTop:18,
    },
  
    TopBox:{
      width: 360,
      height: 120,
      backgroundColor:"#022497",
      marginLeft:12,
      marginTop: 15,
      borderRadius:25,
    },
    midBox:{
      width: 330,
      height: 40,
      backgroundColor:"#F0EFFF",
      marginTop: 10,
      marginLeft:15,
      borderRadius:100,
    },
    bottomBox:{
      width: 335,
      height: 63,
      backgroundColor:"#8088ff",
      marginTop: 20,
      marginLeft:11,
      borderRadius:80,
    },
    modalBox:{
      width: 370,
      backgroundColor:'#001379',
      marginTop:470,
      height:60,
      marginLeft:11,
      position:'absolute',
      backgroundColor:'#fff',
      borderRadius:20,
    },
    box: {
      width: 180,
      height: 120,
      backgroundColor:"#022497",
      marginLeft:15,
      marginTop: 25,
      borderRadius:10,
      flexDirection: 'row',
    },
    top: {
      backgroundColor:'#7C00DC',
      borderBottomEndRadius:40,
      height:40,
      width: 400,      
      
      flexDirection:'row'
      },
    bottom: {
        width: 360,
        height: 290,
        backgroundColor:"#7C00DC",
        marginTop: 15,
        borderRadius:30,
        marginLeft:13,
      },
  });
