import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListItemCard() {
    const listData = [
        {
            uid:1,
            name:'Harsh Chaudhary',
            position:'Manager',
            imageUrl:'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:2,
            name:'Aman Kumar',
            position:'Co-Founder',
            imageUrl:'https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:3,
            name:'Akshey Prajapati',
            position:'Software Engineer',
            imageUrl:'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:4,
            name:'Nikhil Singh',
            position:'UX/UI Designer',
            imageUrl:'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid:5,
            name:'Chetan Podal',
            position:'Hacker',
            imageUrl:'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ];
  return (
    <View>
        <Text style={styles.headingContainer}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {listData.map(({uid,name,position,imageUrl})=>(
            <View key={uid} style={styles.card}>
                <Image 
                source={{uri:imageUrl}}
                style={styles.userImage}/>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userPosition}>{position}</Text>
                </View>
        </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingContainer:{
        fontSize:24,
        fontWeight:'bold',
        padding:10,
    },
    container:{
        paddingHorizontal:16,
        marginVertical:10
    },
    card:{
        flex:1,
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        marginVertical:4,
        backgroundColor:'#BF2EF0',
        paddingLeft:10,
        paddingVertical:6,
        borderRadius:10
    },
    userImage:{
        width:80,
        height:80,
        borderRadius:50,
    },
    userName:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    },
    userPosition:{
        fontWeight:'bold',
    },
})