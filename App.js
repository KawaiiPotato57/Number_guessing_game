import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ToastAndroid } from "react-native";

export default function App() {
  
  const [getText, setText] = useState(" ");
  const [getround,setround] = useState(0);
  const [getScore,setScore] = useState(10);
  // const [getTurnd,setround] = useState(0);
  const [getTurn, setTurn] = useState(2);

  const buttonClick = (txt) => {
    setText(getText + txt);
  };

  useEffect(() => {
    randomDigit(); 
  }, []);
  const randomDigit = (dig) => {

    global.randomNumber = Math.floor(Math.random() * 9) + 1 ;
    setTurn(2)

    // global.turn=3;

  }

  const checkGuess = (txt) => {
    var guessedNumber = parseInt(txt);
   
    // turn=turn-1;
    setTurn(getTurn-1);
    if(randomNumber==guessedNumber){
      alert("The Guessed number is correct .... : "+randomNumber);
      if(getround<2 ){
        alert("Starting Next Round. ");
      }
      randomDigit()
      setScore(getScore+10)

      setround(getround+1);
      if(getround==2)
      {
        setScore(getScore+10)
        let scoreNew=getScore;

        alert("Game over. \n Your score is: "+scoreNew);
        setround(0)
        setScore(0)

      }

      setText('');
    }
    
    else{
      alert("Wrong Guess..! Remaining  turns = "+ getTurn);
      setText('');
    }
    if(getTurn==0 && getround==2){
      alert("Game Over.... \nTurns left = 0.\nYour Total Score was :  "+getScore);
    }
    if(getTurn==0){

      alert("Round Finished. \nTurns left = 0.\nRandom Number Generated: "+randomNumber);
      setround(getround+1);
      if(getround==2)
      {
        alert("~~ Game over ~~ \nYour score is:" +getScore);
        setround(0)

      }
      randomDigit()
      setTurn(2)
      // alert(getround+1);
      return
    }
    };

  
  return (
    <View style={styles.container}>
      
      <Header fullname="GUESS THE NUMBER GAME yo!" />
      <Text>Guess the number between 0-9.</Text>
      <Text>Round:&nbsp;{getround+1}</Text>
      <Text style={{ fontSize: 50 }}>{getText}</Text>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.numkeys}>
          <Button title="1" color="purple" onPress={buttonClick.bind(this, 1)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="2" color="purple" onPress={buttonClick.bind(this, 2)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="3" color="purple" onPress={buttonClick.bind(this, 3)} />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.numkeys}>
          <Button title="4" color="purple" onPress={buttonClick.bind(this, 4)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="5" color="purple" onPress={buttonClick.bind(this, 5)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="6" color="purple" onPress={buttonClick.bind(this, 6)} />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.numkeys}>
          <Button title="7" color="purple" onPress={buttonClick.bind(this, 7)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="8" color="purple" onPress={buttonClick.bind(this, 8)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="9" color="purple" onPress={buttonClick.bind(this, 9)} />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.numkeys}>
          <Button title="RESET" color="red" onPress={() => {setText(" ")}} />
        </View>
        <View style={styles.numkeys}>
          <Button title="0" color="purple" onPress={buttonClick.bind(this, 0)} />
        </View>
        <View style={styles.numkeys}>
          <Button title="Clear" color="grey" onPress={() => {setText(getText.slice(0,-1))}}/>
        </View>
      </View>


      <View style={{ flexDirection: "row" }}>
        <View style={{width: 120, padding:5}}>
          <Button title="CHECK" color="black" onPress={() => {checkGuess(getText)}} />
        </View>
        <View style={{width: 120, padding:5}}>
          <Button title="REVEAL" color="maroon" onPress={() => {alert("Random Number Generated: "+randomNumber)}} />
        </View>
      </View>

    

      <StatusBar style="auto" />
    </View>
  );
  }
const Header = (props) => {
  return (
    <View>
      <Text style={headerStyles.text}>{props.fullname}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  numkeys: {
    width: 80,
    padding: 10,
  },
});