import { ScrollView, TouchableOpacity } from "react-native";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
import { FavouritesWrapper } from "./favourites-bar.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { TextComponent } from "../../../../components/typography/text.components";
import { FavouritesMessage } from "./favourites-messages.components";
export const FavouritesBar = ({ favourites, handleNavigation }) => {
	if (!favourites.length)
		return <FavouritesMessage message="Favourites List is Empty!!" />;
	return (
		<FavouritesWrapper>
			<FavouritesMessage message="Favourites List" />

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map((resturant) => (
					<Spacer postion={"left"} size="large" key={resturant.name}>
						<TouchableOpacity onPress={handleNavigation.bind(this, resturant)}>
							<ResturantInfoCompact resturant={resturant} />
						</TouchableOpacity>
					</Spacer>
				))}
			</ScrollView>
		</FavouritesWrapper>
	);
};
