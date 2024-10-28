import { useContext } from "react";
import { ResturantContext } from "../../../services/resturants/resturants.context";
import { Container } from "../../../components/utils/safe-area.components";
import {
	ListContainer,
	ResturantsList,
} from "./rsturant-screen.styles";
import { LoadingDataIndicator } from "../../../ui/loading-data-indicator/loading-data-indicator.components";
import { ResturantInfoCard } from "../components/resturant-info/resturant-info.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search/search.components";
export const ResturantScreen = () => {
const {resturants, isLoading } = useContext(ResturantContext);
	return (
		<>
			<Container>
				{(isLoading)&&<LoadingDataIndicator/>}
				<Search/>
				<ListContainer>
					<ResturantsList
						data={resturants}
						renderItem={(dataItem) => {
							return (
								<Spacer postion={"bottom"} size="large">
									<ResturantInfoCard resturant={dataItem.item}/>
								</Spacer>
							)
						}}
						keyExtractor={(item) => item.name}
					/>
				</ListContainer>
			</Container>
		</>
	);
};
