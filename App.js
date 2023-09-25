import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import ImageViewer from "./components/ImageViewer";

export default function App() {
  const placeHolderImage = require("./assets/images/background-image.png");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeHolderImage} />
      </View>
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
