import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
  },
});

export default Title;
