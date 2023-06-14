import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import QuickCard from '../components/QuickCard';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../components/Subtitle';
import ButtonIcon from '../components/ButtonIcon';
import { FavoriteContext } from '../store/context/favorite-context';
function MealDetails({route, navigation}){
    console.log(route.params.data.title);
    useLayoutEffect(() =>{
            navigation.setOptions({
                title:meal.title,
            });
        }, []
    
    );
    useEffect(() =>{
        navigation.setOptions({
            headerRight:() => {return <ButtonIcon name = {isMealFavorite ? "star" : "star-outline"} color = "white"  onPress = {onPressHandler} />}
        });
    },[isMealFavorite, onPressHandler]);
    


    function onPressHandler(){
        
        if(isMealFavorite){
            favoriteMealCtx.removeFavorite(meal.id);
            console.log("Meal is not favorite now.")
        }
        else{
            favoriteMealCtx.addFavorite(meal.id);
            console.log("Meal is favorite now.")
        }
    }
    
    const meal = route.params.data;

    const favoriteMealCtx = useContext(FavoriteContext);

    const isMealFavorite = favoriteMealCtx.ids.includes(meal.id);
    
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