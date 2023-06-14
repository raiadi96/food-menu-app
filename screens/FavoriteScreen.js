import { useContext } from 'react';
import {Text, View} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { FavoriteContext } from '../store/context/favorite-context';
function FavoriteScreen(){

    const favoriteMealsCtx = useContext(FavoriteContext);

    const favMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));


    return < MealList items={favMeals}/>
}

export default FavoriteScreen;