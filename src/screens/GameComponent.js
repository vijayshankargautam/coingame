import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TouchableOpacitylert,
} from "react-native";
import React, { useState, useEffect } from "react";

const GameScreen = ({ navigation }) => {
  const [coins, setCoins] = useState(21);

  useEffect(() => {
    console.log("l1 latest coins state ", coins);
    if (coins <= 0) {
      // Alert.alert('The AI wins, try again');
      navigation.navigate("PlayAgainComponent");
    }
  }, [coins]);

  const handleTap = (n) => {
    if (coins <= 6) {
      console.log("l2 less than 6");
      switch (n) {
        case 4:
          setCoins(coins - n - 1);
          console.log("l3 coins 4", n);
          return;
        case 3:
          setCoins(coins - n - 2);
          console.log("l4 coins 3", n);
          return;
        case 2:
          setCoins(coins - n - 3);
          console.log("l5 coins 2", n);
          return;
        case 1:
          setCoins(coins - n - 4);
          console.log("l6 coins 1", n);

          return;

        default:
          break;
      }
    } else {
      console.log("Triggered with human turn coins", coins);
      console.log("AI turn coins left", coins);
      if (n === 1) {
        setCoins(coins - 2);
        console.log("Equals to 1", coins);
      } else {
        setCoins(coins - 2 * n + 1);
        console.log("Not 1 but ", coins);
      }
      console.log("AI turn ends with coins left", coins);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#ccccff",
        flex: 1,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {coins !== undefined && coins >= 1 ? (
          [...Array(coins)].map((item, index) => (
            <Coin key={`${index}_${index}`} uid={index} />
          ))
        ) : (
          <Text>No coins</Text>
        )}
      </View>

      <View
        style={{
          // backgroundColor: 'skyblue',
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <UserCoin handleTap={handleTap} tap={4} />
        <UserCoin handleTap={handleTap} tap={3} />
        <UserCoin handleTap={handleTap} tap={2} />
        <UserCoin handleTap={handleTap} tap={1} />
      </View>
    </View>
  );
};

const Coin = (props) => {
  return (
    <View
      style={{
        width: 36,
        height: 36,
        marginTop: 3,
        marginLeft: 3,
        backgroundColor: "gold",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{`${props.uid + 1}`}</Text>
    </View>
  );
};

const UserCoin = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.handleTap(props.tap)}
      style={{
        width: 30,
        height: 30,
        marginTop: 3,
        marginLeft: 3,
        backgroundColor: "skyblue",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{props.tap}</Text>
    </TouchableOpacity>
  );
};

export default GameScreen;
