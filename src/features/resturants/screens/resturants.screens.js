import { StyleSheet, Text, View, StatusBar } from "react-native";
import Constants from "expo-constants";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ResturantInfoCard } from "../components/resturant-info.components";
export const ResturantScreen = () => {
	const Container = styled(SafeAreaView)`
		flex: 1;
		margin-left: 16px;
		margin-right: 16px;

		${StatusBar.currentHeight
			? `margin-top:${StatusBar.currentHeight}px`
			: `margin-top:${Constants.statusBarHeight}px`
};
	`;
	const SearchContainer = styled.View`
		padding: 16px;
	`;
	const ListContainer = styled.View`
		flex: 1;
		padding: 16px;
	`;
	return (
		<Container mode="margin">
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<ListContainer>
				<ResturantInfoCard />
			</ListContainer>
		</Container>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { padding: 16 },
	list: { flex: 1, backgroundColor: "blue", padding: 16 },
});
