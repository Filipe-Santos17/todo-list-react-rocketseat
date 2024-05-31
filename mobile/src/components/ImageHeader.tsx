import { View, Image, StyleSheet } from 'react-native'

export default function ImageHeader() {
  return (
    <View style={styles.headerBox}>
      <Image source={require('../assets/Logo.png')} style={styles.ImageLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
    paddingVertical: 70,
  },
  ImageLogo:{
    height: 32,
  }
})
