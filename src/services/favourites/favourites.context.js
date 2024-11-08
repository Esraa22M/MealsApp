import { createContext, useState } from "react";
export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);
	const [isToggled, setIsToggled] = useState(false);

	const addFavourite = (resturant) => {
		setFavourites((currentFavorites) => [...currentFavorites, resturant]);
	};
	const removeFavourite = (resturant) => {
		const newFavourites = favourites.filter(
			(favResturant) => favResturant.placeId !== resturant.placeId
		);
		setFavourites([...newFavourites]);
	};
	const isFavourite = (resturant) => {
		const isFavouriteResturant = favourites.find(
			(res) => res.placeId === resturant.placeId
		);
        return isFavouriteResturant;
	};
	value = {
		favourites,
		addToFavourites: addFavourite,
		removeFromFavourite: removeFavourite,
        isFavourite,
		isToggled,
		setIsToggled
	};
	return (
		<FavouritesContext.Provider value={value}>
			{children}
		</FavouritesContext.Provider>
	);
};
