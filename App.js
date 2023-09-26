import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

//--------------------components----------------------//

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

export default function App() {
  const placeHolderImage = require("./assets/images/background-image.png");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeHolderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme= "primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
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

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
