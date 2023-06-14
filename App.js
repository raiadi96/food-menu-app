import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealOverview from './screens/MealOverview';
import MealDetails from './screens/MealDetails';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {

  function DrawerNavigation(){
    return <Drawer.Navigator>
      <Drawer.Screen 
        name= "Categories"
        component = {Categories}
        options={{
          title : "Meal Categories",
          drawerIcon:({color, size}) => (
            <Ionicons name ="grid" color = {color} size = {size}/>
          )
        }}
      />
      <Drawer.Screen name="Favourites"
      component = {FavoriteScreen}
      options={{
        drawerIcon:({color, size}) => (
          <Ionicons name ="star" color = {color} size = {size}/>
        )
      }}
      />
    </Drawer.Navigator>
  }

  return (
    <>
      <StatusBar style = 'light'/>
      <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{'backgroundColor':'#351401'},
          headerTintColor:'white',
          headerTitleAlign:"center",
          contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name="MainDrawer" component = {DrawerNavigation} 
          options={{headerShown:false}}
          />
          <Stack.Screen name="MealOverview" component={MealOverview} options ={{
            title : "Meal Overview"
          }}/>
          <Stack.Screen name="MealDetails" component={MealDetails} options ={{
            title:"Meal Details"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
