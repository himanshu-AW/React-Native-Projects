import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import FlatCard from './FlatCard';

const FlattListComp = () => {
  const USERS = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        city: 'Gwenborough',
      zipcode: '92998-3874',    
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990',
        },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        city: 'Roscoeview',
        zipcode: '33263',
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        city: 'South Christy',
        zipcode: '23505-1337',
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      address: {
        street: 'Rex Trail',
        city: 'Howemouth',
        zipcode: '58804-1099',
      },
      phone: '210.067.6132',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      address: {
        street: 'Ellsworth Summit',
        city: 'Aliyaview',
        zipcode: '45169',
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      address: {
        city: 'Lebsackbury',
        zipcode: '31428-2261',
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Showing Users by FlatList</Text>
          {/* <FlatList
            data={USERS}
            renderItem={user => <FlatCard user={user.item} />}
            // keyExtractor={user => user.id}
          /> */}
          {/* Simple List */}
          {USERS.map((user,index)=> <FlatCard key={index} user={user} />)}
      </View>
    </ScrollView>
  );
};

export default FlattListComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
