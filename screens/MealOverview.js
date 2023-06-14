import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MealList from "../components/MealList";
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

    return <MealList items = {mealsInThisCategory}/>;
}
export default MealOverview;