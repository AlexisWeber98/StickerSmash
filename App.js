import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

//--------------------components----------------------//

import CircleButton from "./components/CircleButton";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";
import ImageViewer from "./components/ImageViewer";

export default function App() {
  const placeHolderImage = require("./assets/images/background-image.png");

  //-------------------- Local States--------------------//
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showOptions, setShowOptions] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const [pickedEmoji, setPickedEmoji] = useState(null)

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

  const onReset = () => {
    setShowOptions(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeHolderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji !==null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/> : null}
      </View>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} icon />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
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
        onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
        </EmojiPicker>
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

  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },

  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
