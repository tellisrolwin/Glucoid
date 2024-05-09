import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { styles } from "./Styles.js";

export default function App() {
  const { width: windowWidth } = Dimensions.get("window");
  const elementWidth = windowWidth * 0.8;

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
        />
      </View>
      <Button title="go" buttonStyle={styles.buttonGo} />

      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}
