import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { styles } from "./Styles.js";
import React, { useState, useRef } from "react";

export default function App() {
  const { width: windowWidth } = Dimensions.get("window");
  const elementWidth = windowWidth * 0.8;
  const [textInputValue, setTextInputValue] = useState(""); // State to hold input value
  const [updatedText, setUpdatedText] = useState("");
  const [showView, setShowView] = useState(false);

  const handleButtonClick = () => {
    const mgDl = parseFloat(textInputValue);
    if (mgDl > 0) {
      if (!isNaN(mgDl)) {
        const mmolL = mgDl / 18.0182;
        setUpdatedText(mmolL.toFixed(1));
        setShowView(true);
      } else {
        setShowView(false);
      }
    } else {
      setShowView(false);
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text1}>Glucoid1!</Text>
        <Button title="switch" buttonStyle={styles.buttonSwitch} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.text2}>Enter (in mg/dl):</Text>
        <TextInput
          style={styles.myTextInput}
          keyboardType="numeric"
          placeholder="mg/dl"
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
      </View>
      <Button
        title="go"
        onPress={handleButtonClick}
        buttonStyle={styles.buttonGo}
      />
      {showView ? (
        <View style={styles.outputView}>
          <Text style={styles.outputFormatText}>Your gluco level is:</Text>
          <Text style={styles.myTextOutput}>{updatedText} mmol/l</Text>
        </View>
      ) : null}
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}
