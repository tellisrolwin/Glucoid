import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");
const elementWidth = windowWidth;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#333",
  },
  topContainer: {
    // newVal= ogVal/500 or ogVal/1000
    flex: 1,
    padding: elementWidth * 0.01,
    marginTop: elementWidth * 0.16,
    marginLeft: elementWidth * 0.03,
    marginRight: elementWidth * 0.02,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    color: "#fff",
    fontSize: elementWidth * 0.1,
  },
  buttonSwitch: {
    borderRadius: elementWidth * 0.03,
    backgroundColor: "#3853b5",
    height: elementWidth * 0.1,
    width: elementWidth * 0.2,
  },
  inputView: {
    flex: 1,
    backgroundColor: "#333",
    padding: elementWidth * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  text2: {
    color: "#fff",
    fontSize: elementWidth * 0.05,
    marginLeft: elementWidth * 0.02,
  },
  myTextInput: {
    backgroundColor: "#fff",
    flex: 1,
    padding: elementWidth * 0.03,
    marginLeft: elementWidth * 0.08,
    marginRight: elementWidth * 0.08,
    borderRadius: elementWidth * 0.04,
    color: "#111",
    textAlign: "center",
    fontSize: elementWidth * 0.06,
  },
  buttonGo: {
    borderRadius: elementWidth * 0.05,
    height: elementWidth * 0.1,
    width: elementWidth * 0.2,
    alignSelf: "center",
    backgroundColor: "#3853b5",
  },
  outputView: {
    flex: 1,
    //backgroundColor: "#333",
    paddingTop: elementWidth * 0.3,
    paddingRight: elementWidth * 0.05,
    paddingLeft: elementWidth * 0.05,
    flexDirection: "column",
    alignItems: "center",
  },
  outputFormatText: {
    backgroundColor: "#fff",
    color: "#111",
    fontSize: elementWidth * 0.05,
    alignSelf: "flex-start",
  },
  myTextOutput: {
    //backgroundColor: "#fff",
    color: "#fff",
    fontSize: elementWidth * 0.1,
    alignSelf: "flex-end",
  },
});
