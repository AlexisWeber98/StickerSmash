import { Text, StyleSheet, Pressable, View } from "react-native-web";

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You Press the Button")}>
        <Text style={styles.label}> {label} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon:{
    paddingRight: 8,
  }
});
