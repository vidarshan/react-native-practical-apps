import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWIdth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWIdth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWIdth < 180 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWIdth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
