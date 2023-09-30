import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

//--------------------components----------------------//

import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

export default function App() {
  const placeHolderImage = require("./assets/images/background-image.png");

  //-------------------- Local States--------------------//
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [showOptions, setShowOptions] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState(null);

  //------------------------ functions -----------------//

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowOptions(true);
    } else {
      alert("You did not  selected any image");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => {
              setShowOptions(true);
            }}
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={onModalClose}></EmojiPicker>
      <StatusBar style="auto" />
    </View>
   
  );
}

//--------------------- Styles -------------------------//
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
