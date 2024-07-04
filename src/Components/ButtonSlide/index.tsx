import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {style} from './style'
interface IButton extends TouchableOpacityProps{
  onPressI: () => void
}


export function ButtonSlide({ onPressI}: IButton) {
  return (
    <TouchableOpacity style = {style.ball} onPress={onPressI}/>
  )
}