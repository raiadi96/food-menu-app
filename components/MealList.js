import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';

function MealList({items}){
    function renderMeals({item}){
        console.log("logging list item :", item, "title", item.title);
        return <MealItem data = {item}/>
    };

    console.log("Meal in this Overview", items);
    return (
        <View styles = {styles.container}>
            <FlatList data={items} keyExtractor={item => item.id}  renderItem={renderMeals}/>
        </View>
    );
}

export default MealList;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
