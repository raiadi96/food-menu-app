import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});

function FavoriteContextProvider({children}){

    const[FavoriteIds, setFavoriteIds] = new useState([]);

    function addFavoriteMeals(id){

        setFavoriteIds(currentId => [...FavoriteIds, id]);
    }

    function removeFavoriteMeals(id){
        setFavoriteIds(currentId => FavoriteIds.filter((mealId) => mealId != id));
    }

    const value = {
        ids:FavoriteIds,
        addFavorite:addFavoriteMeals,
        removeFavorite:removeFavoriteMeals
    }

    return <FavoriteContext.Provider value = {value}>{children}</FavoriteContext.Provider>
}

export default FavoriteContextProvider;