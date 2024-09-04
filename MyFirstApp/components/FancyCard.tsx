import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image style={styles.cardImg} source={{uri:`https://lh5.googleusercontent.com/p/AF1QipPDLirqfw5xgn_jillIQx38NXrmK7jVUUKTJn0O=w592-h404-n-k-no-v1`}}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitile}>Science city Robotics</Text>
          <Text style={styles.cardLabel}>Ahemdabad</Text>
          <Text style={styles.cardDescription}>Newly added feather to the Gujarat science city is the Robotics Gallery. The Robotics Gallery is developed as an interactive gallery showcasing the frontiers of robotic technologies over an area of more than 11000 sq.m and which would provide a platform for the visitors to explore the ever-advancing field of robotics.</Text>
          <Text style={styles.cardFooter}>12 minute ago</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    card:{
        // width:380,
        padding:1,
        marginHorizontal:14,
        marginVertical:12,
        borderRadius:6,
        overflow:'hidden',
    },
    cardElevated:{
      backgroundColor:'#ffffff',
      color:'#000000',
      elevation:4,
      shadowOffset:{
        width:2,
        height:2
      }
    },
    cardImg:{
        height:220,
        margin:6,
        borderRadius:4,
        objectFit:'cover',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
      flex :1,
      flexGrow:1,
      padding:8,
    },
    cardTitile:{
        fontSize:20,
        fontWeight:'bold',
        color:'#333',
        marginBottom:4,
    },
    cardLabel:{
        fontSize:14,
        fontWeight:'bold',
        color:'#192A56',
        marginBottom:4,
    },
    cardDescription:{
        fontSize:14,
        color:'#333333',
        lineHeight:20,
        marginBottom:4,
    },
    cardFooter:{
        fontSize:14,
        fontWeight:'bold',
        color:'#FF3031',
        marginBottom:4,
    }
})