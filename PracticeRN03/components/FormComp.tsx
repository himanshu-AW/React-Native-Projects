import {StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, {useState} from 'react';

const FormComp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mNumber, setmNumber] = useState('');
  const [password, setPassword] = useState('');
  const [details,setDetails] = useState(false);

  const resetHandler = () => {
    setName('');
    setEmail('');
    setmNumber('');
    setPassword('');
    setDetails(false);
  }

  const registerData = () => {
    setDetails(true);
  }

  return (
    <View style={styles.conatiner}>
      <Text style={styles.heading}>Registration Form</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputField} 
        value={name} 
        onChangeText={(text)=>setName(text)}
        placeholder="Name" />
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={(text)=>setEmail(text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputField}
          value={mNumber}
          onChangeText={(text)=>setmNumber(text)
          }
          placeholder="Mobile Number"
        />
        <TextInput
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
        />
        
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity
        onPress={()=>registerData()}
        >
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>resetHandler()}
        >
            <Text style={styles.buttonText}>Reset</Text>

        </TouchableOpacity>
      </View>
      {details && (<View style={styles.detailContainer} >
        <Text style={styles.detailText}>Name: {name}</Text>
        <Text style={styles.detailText}>Email: {email}</Text>
        <Text style={styles.detailText}>Mobile No.: {mNumber}</Text>
        <Text style={styles.detailText}>Password: {password}</Text>
      </View>)}
    </View>
  );
};

export default FormComp;

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
    borderColor: '#0CAFFF',
    borderWidth: 2,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
    gap: 10,
    justifyContent: 'space-between',
  },
  inputField: {
    borderColor: '#0CAFFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#aaa',
    fontSize: 18,
    color: '#333',
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    padding: 10,
    backgroundColor: '#0CAFFF',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailContainer:{
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0CAFFF',
    marginBottom: 10,
  },
  detailText:{
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    padding: 10,
  }
});
