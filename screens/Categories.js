import { FlatList, View } from "react-native";
import {CATEGORIES} from "../data/dummy-data.js";
import CategoryGridTile from "../components/CategoryGridTitle.js";

function renderGridItem(itemData){
    console.log("Rendering :", itemData.item.title)
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}
function Categories(){
    return <FlatList data={CATEGORIES} 
            keyExtractor={item => item.id} 
            numColumns = {2} 
            renderItem = {renderGridItem}/>
};
export default Categories;