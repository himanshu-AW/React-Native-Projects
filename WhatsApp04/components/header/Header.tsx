import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View>
        <Text style={styles.heading}>WhatsApp</Text>
        </View>

        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <MaterialIcons name="qr-code-scanner" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="camera" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#018749',
  },
  heading: {
    fontWeight: '700',
    color: '#ffffff',
    fontSize: 32,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 20,
  },
});

export default Header;
