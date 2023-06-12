import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import QuickCard from '../components/QuickCard';
import { useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../components/Subtitle';
import ButtonIcon from '../components/ButtonIcon';
function MealDetails({route, navigation}){
    console.log(route.params.data.title);
    useLayoutEffect(() =>{
            navigation.setOptions({
                title:meal.title,
            });
        }, []
    
    );
    navigation.setOptions({
        headerRight:() => {return <ButtonIcon name = "star" color = "white"  onPress = {onPressHandler} />}
    });


    function onPressHandler(){
        console.log("clicked!")
    }
    
    const meal = route.params.data;
    
    return (
        <View style = {{flex:1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Image style = {styles.imageContainer} source={{'uri':meal.imageUrl}}/>
            <QuickCard 
            isVegan = {meal.isVegan == true? 'YES':'NO'} 
            isVegetarian = {meal.isVegetarian == true? 'YES':'NO'} 
            isLactoseFree = {meal.isLactoseFree == true? 'YES':'NO'} 
            isGlutenFree ={meal.isGlutenFree == true? 'YES':'NO'} 
            complexity = {meal.complexity} 
            affordability = {meal.affordability} />
            <Subtitle>Ingredients</Subtitle>
            {meal.ingredients.map(ingredient =>{
                {console.log(ingredient)}
                return <Text style = {[styles.listContainer, {paddingHorizontal:10} ]} key={ingredient}>{ingredient}</Text>
            })}
            <Subtitle>Steps</Subtitle>
            {meal.steps.map((step) => {
                {console.log(step)}
                return <Text style = {[styles.listContainer, {paddingHorizontal:10} ]} key={step}>{step}</Text>
            })}
        </ScrollView>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    imageContainer : {
        height:300,
        width:'100%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff'
    },
    listContainer:{
        color:'beige'
    }
})