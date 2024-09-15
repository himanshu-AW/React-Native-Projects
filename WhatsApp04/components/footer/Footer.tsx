import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  return (
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialIcons name="chat" size={30} color="#222" />
          <Text style={styles.footerTxt}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialCommunityIcons name="circle-double" size={30} color="#222" />
          <Text style={styles.footerTxt}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialCommunityIcons
            name="account-group-outline"
            size={30}
            color="#222"
          />
          <Text style={styles.footerTxt}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <MaterialIcons name="call" size={30} color="#222" />
          <Text style={styles.footerTxt}>Calls</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F2F2F2',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerTxt: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Footer;
