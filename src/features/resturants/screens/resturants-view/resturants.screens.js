import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { Container } from "../../../../components/utils/safe-area.components";
import { ListContainer, ResturantsList } from "./resturants-screen.styles";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { ResturantInfoCard } from "../../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Search } from "../../components/search/search.components";
export const ResturantScreen = ({ navigation }) => {
	const { resturants, isLoading } = useContext(ResturantContext);
	const handleNavigation = (item) => {
		navigation?.navigate("ResturantDetails", {resturant:item});
	};
	return (
		<>
			<Container>
				{isLoading && <LoadingDataIndicator />}
				<Search />
				<ListContainer>
					<ResturantsList
						data={resturants}
						renderItem={(dataItem) => {
							return (
								<TouchableOpacity onPress={handleNavigation.bind(this, dataItem.item)}>
									<Spacer postion={"bottom"} size="large">
										<ResturantInfoCard resturant={dataItem.item} />
									</Spacer>
								</TouchableOpacity>
							);
						}}
						keyExtractor={(item) => item.name}
					/>
				</ListContainer>
			</Container>
		</>
	);
};
