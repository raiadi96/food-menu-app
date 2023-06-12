import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function ButtonIcon({name, color, onPress}){
    console.log("Inside Button Icon!")
    return <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.buttonPressed}>
        <Ionicons name = {name} size={24} color = {color} />
    </Pressable>;
}

export default ButtonIcon;

const styles = StyleSheet.create({
    buttonPressed:{
            color:'blue',
            opacity:0.2
    }
})