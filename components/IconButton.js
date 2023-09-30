import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/MaterialIcons";

export default IconButton = (label, icon, onPress) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}> {label} </Text>
    </Pressable>
  );
};

//-----------------------styles-------------------//

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#FFF",
    marginTop: 12,
  },
});
