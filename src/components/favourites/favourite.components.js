import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./favourite-button.components";
export const Favourite = ({ resturant }) => {
	const {  addToFavourites, removeFromFavourite, isFavourite } =
		useContext(FavouritesContext);
	const isFavouriteFlag = isFavourite(resturant);
	const FavouriteIcon = isFavouriteFlag
		? { name: "heart", color: "red" }
		: { name: "hearto", color: "black" };
	const pressHandler = isFavouriteFlag
		? removeFromFavourite.bind(this, resturant)
		: addToFavourites.bind(this, resturant);
	return (
		<>
			<FavouriteButton
				pressHandler={pressHandler}
				iconColor={FavouriteIcon.color}
				iconName={FavouriteIcon.name}
			/>
		</>
	);
};
