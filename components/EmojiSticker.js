import { View, Image } from "react-native"

export default EmojiSticker = ( {imageSize, stickerSource}) => {
return(
    <View style={{top:-350}}>
        <Image source={stickerSource} resizeMode="contain" style={{width: imageSize, height: imageSize}}/>
    </View>
)
}