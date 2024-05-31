import { View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { typeInputCreate } from "../@types/types";

export default function InputCreate({ textValue, setText, onClickBtn }: typeInputCreate) {
  return (
    <View style={styles.InputBox}>
      <TextInput placeholder="Add a new task" placeholderTextColor="#808080" style={styles.InputC} value={textValue} onChangeText={setText} />
      <TouchableOpacity style={styles.btnPlus} onPress={onClickBtn}>
        <Image source={require('../assets/btn-plus.png')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  InputBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 4,
    marginTop: -32,
  },
  InputC: {
    borderRadius: 6,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    padding: 16,
    height: 54,
    color: '#F2F2F2',
    flex: 1,
  },
  btnPlus: {
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
  },
})
