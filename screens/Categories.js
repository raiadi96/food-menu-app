import { FlatList, View } from "react-native";
import {CATEGORIES} from "../data/dummy-data.js";
import CategoryGridTile from "../components/CategoryGridTitle.js";


function Categories({navigation}){

function renderGridItem(itemData){
    console.log("Rendering :", itemData.item.title)
    function onPressHandler(){
        console.log("Inside on press handler", itemData.item.id);
        navigation.navigate('MealOverview', {catId:itemData.item.id, catTitle:itemData.item.title});
    }
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>
}
    
    return <FlatList data={CATEGORIES} 
            keyExtractor={item => item.id} 
            numColumns = {2} 
            renderItem = {renderGridItem}/>
};
export default Categories;