import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function FlatCard(){
    return (
      <View>
        <Text style={styles.headingText}> Flat Cards </Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={{fontSize: 20}}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={{fontSize: 20}}>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={{fontSize: 20}}>Lime</Text>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        width:100,
        height:100,
        borderRadius:10,
        margin:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'blue'
    },
    cardThree:{
        backgroundColor:'lime'
    },
})
