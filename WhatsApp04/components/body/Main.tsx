import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Search from '../search/Search';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersAction} from '../../store/actions/UserActions';

const Main = () => {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.UserReducer);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Search />
      <View style={styles.mainBody}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {users && users.map((user,index)=>(
            <View key={index} style={styles.card}>
            <View style={styles.cardImg}>
              <Image
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                src={user.image}
              />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{user.firstName+" "+user.lastName}</Text>
              <Text numberOfLines={1} style={styles.cardStatus}>{user.userAgent}</Text>
            </View>
            <View style={styles.cardStatus}>
              <Text style={{padding: 8}}>{user.bank.cardExpire}</Text>
            </View>
          </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  mainBody: {
    width: '100%',
    backgroundColor: 'white',
    padding: 1,
    borderTopWidth: 0.3,
    borderColor: '#ddd',
  },
  card: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fafafa',
    borderWidth: 0.2,
    borderColor: '#aaa',
  },
  cardImg: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth:.4,
    borderColor:'gray',
    overflow: 'hidden',
  },
  cardBody: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 12,
  },
  cardTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  cardStatus: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 3,
  },
});
