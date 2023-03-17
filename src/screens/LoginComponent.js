import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const LoginComponent = ({ navigation }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const submitData = () => {
        console.log('Data ', user, password);
        if (user == '' || password == '') {
            Alert.alert('enter data information')
        }
        else{
            if (user == 'guest' || password == 'guest1234') {
                navigation.navigate('GameComponent')
                return
                // navigation.navigate('GameComponent')
            }
            if (user == 'admin' || password == 'admin1234') {
                navigation.navigate('GameComponent')
                return
            }
            else {
                Alert.alert("Wrong data");

            }
        }
    }
    
  return (
    <View>
      <TextInput 
      placeholder='username'
      value={user}
      onChange={(value) => {setUser(value.nativeEvent.text)}}
      style={{
        borderWidth: 3,
        height: 55,
      }} />
      <TextInput
      placeholder='password'
      value={password}
      onChange={(value) => {setPassword(value.nativeEvent.text)}}
      style={{
        borderWidth: 3,
        height: 55,
      }} />
      <Button onPress={() => submitData()} title='Login' />
    </View>
  )
}

export default LoginComponent