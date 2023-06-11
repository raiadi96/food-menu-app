import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealOverview from './screens/MealOverview';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style = 'light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{'backgroundColor':'#351401'},
          headerTintColor:'white',
          headerTitleAlign:"center",
          contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name="Categories" component = {Categories} options={{
            title : "Meal Categories",
          }
          } />
          <Stack.Screen name="MealOverview" component={MealOverview} options ={{
            title : "Meal Overview"
          }}/>
          <Stack.Screen name="MealDetails" component={MealDetails} options ={{
            title:"Meal Details"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
