import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default function ScrollableCard(){
    return (
      <View>
        <Text style={styles.headingText}>Scrollable Cards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>me</Text>
            </View>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>to</Text>
            </View>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>more..</Text>
            </View>
            <View style={[styles.card,styles.cardScrollable]}>
                <Text style={styles.commonTextStyle}>😊</Text>
            </View>
        </ScrollView>
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
        padding:8
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
    cardScrollable:{
        backgroundColor:'gray',
        elevation:4,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowColor:'#fff',
        shadowOpacity:0.9,
        shadowRadius:2,
    },
    commonTextStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',

    }
})
