import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = ({user}) => {
  return (

      <View style={styles.card}>
        <Image
          style={styles.imgContainer}
          src="https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg"
        />
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.emailText}>Email: {user.email}</Text>
        <Text style={styles.phoneText}>Phone: {user.phone}</Text>
        <Text style={styles.websiteText}>{user.website}</Text>
        <Text style={styles.addressText}>
          {user.address.street +
            ' ' +
            user.address.city +
            ' ' +
            user.address.zipcode}
        </Text>
      </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 4,
    margin: 8,
    width: '90%',
    marginHorizontal: 'auto',
    backgroundColor: '#8F00FF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    objectFit: 'contain',
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  nameText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 15,
    color: '#dedede',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  phoneText: {
    fontSize: 15,
    color: '#eee',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  websiteText: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 18,
    color: '#111',
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
