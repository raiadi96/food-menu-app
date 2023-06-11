import {View, Text, StyleSheet} from 'react-native';
function QuickCard({isVegan, isVegetarian, isLactoseFree, isGlutenFree, complexity, affordability}){
    console.log("Loggin Quick Card Details:", isVegan, isVegetarian, isLactoseFree, isGlutenFree, complexity, affordability)
    console.log("Inside Quick Card")
    return <View style = {styles.introDetails}>
        <View style = {styles.horizontalContainer}>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{isVegetarian}</Text>
                <Text style = {styles.fontStyle}>Is Vegetarian</Text>
            </View>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{isVegan}</Text>
                <Text style = {styles.fontStyle}>Is Vegan</Text>
            </View>
        </View>
        <View style = {styles.horizontalContainer}>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{isLactoseFree}</Text>
                <Text style = {styles.fontStyle}>Is isLactoseFree</Text>
            </View>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{isGlutenFree}</Text>
                <Text style = {styles.fontStyle}>Is isGlutenFree</Text>
            </View>
        </View>
        <View style = {styles.horizontalContainer}>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{complexity}</Text>
                <Text style = {styles.fontStyle}>Complexity</Text>
            </View>
            <View style = {styles.miniVerticalContainer}>
                <Text style = {styles.fontStyle}>{affordability}</Text>
                <Text style = {styles.fontStyle}>affordability</Text>
            </View>
        </View>
    </View>
};

export default QuickCard;

const styles = StyleSheet.create({
    introDetails:{
        margin:10,
        backgroundColor:'#fff',
        padding:16,
        height:'25%',
        justifyContent:'center',
        alignItems:'stretch'
    },
    horizontalContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:5
    },
    miniVerticalContainer:{
        flexDirection:'column',
        margin:2
    },
    fontStyle:{
        fontSize:16,
        color:'grey',
        textAlign:'center'
    }
});
