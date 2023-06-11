import { useNavigation } from '@react-navigation/native';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

function MealItem({data}){
    console.log("Meal Name", data.title);
    const navigation = useNavigation();
    function onPressHandler(){
        navigation.navigate("MealDetails", {data:data});
    }
    return (
        <View style = {styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed})  => pressed? styles.buttonPressed:null} onPress={onPressHandler}>
                <View>
                <Image style = {styles.imageContainer} source={{uri:data.imageUrl}}/>
                <Text style = {styles.title}>{data.title}</Text>
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.detailText}>{data.duration} minutes</Text>
                    <Text style = {styles.detailText}>{data.complexity.toUpperCase()}</Text>
                    <Text style = {styles.detailText}>{data.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default MealItem;

const styles = StyleSheet.create(
    {
        imageContainer:{
            height:300,
            width:'100%',
            padding:20
        },
        title:{
            fontWeight:'bold',
            fontSize:18,
            textAlign:'center'
        },
        mealItem:{
            borderRadius:16,
            backgroundColor:'white',
            margin:8,
            overflow: 'hidden',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        },
        textContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding:4
        },
        detailText:{
            fontSize:12,
            margin:4        
        },
        buttonPressed:{
            opacity: 0.5,
        }
    }
);