import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Break", "Long Break"];
export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={
            [
              styles.itemStyle,
              currentTime !== index && { borderColor: "transparent" },
            ] // con esto solo tiene el border el componente seleccionado por el index
          }
          onPress={() => handlePress(index)}
        >
          <Text style={{fontWeight: 'bold'}}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
});
