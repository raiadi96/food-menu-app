import { View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function MealOverview({route}){
    const catId = route.params.catId;
    const mealsInThisCategory = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });
    const navigation = useNavigation();
    useLayoutEffect(() =>{

        const categoryTitle = CATEGORIES.find(item => item.id == catId).title;

        navigation.setOptions({title:categoryTitle});
    }, [catId, navigation]);

    function renderMeals({item}){
        console.log("logging list item :", item, "title", item.title);
        return <MealItem data = {item}/>
    };

    console.log("Meal in this Overview", mealsInThisCategory);
    return (
        <View styles = {styles.container}>
            <FlatList data={mealsInThisCategory} keyExtractor={item => item.id}  renderItem={renderMeals}/>
            
        </View>
    );

}
const styles = {
    container:{
        flex:1
    }
}

export default MealOverview;