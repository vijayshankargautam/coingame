import { View, Text, Button } from 'react-native'
import React from 'react'

const PlayAgainComponent = ({ navigation }) => {
  return (
    <View style={{  
        flex: 1,
    }}>
      <Text>You can beat the AI, please try again</Text>
      <Button title='Play Again' onPress={() => navigation.replace('GameComponent')} />
    </View>
  )
}

export default PlayAgainComponent