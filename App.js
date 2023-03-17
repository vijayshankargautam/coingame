import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginComponent from './src/screens/LoginComponent';
import GameComponent from './src/screens/GameComponent';
import PlayAgainComponent from './src/screens/PlayAgainComponent';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginComponent" component={LoginComponent} />
                <Stack.Screen name="GameComponent" component={GameComponent} />
                <Stack.Screen name="PlayAgainComponent" component={PlayAgainComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




export default function App() {
  return (
    <View style={{
      flex: 1,                                                          
    }}>

      {/* <GameComponent /> */}
      <Navigation />

      <StatusBar style="auto" />
    </View>
  );
}
