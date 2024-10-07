import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "some resturant",
		icon,
		photos = [
			"https://media1.popsugar-assets.com/files/thumbor/vIAZ7xK3B0qJKKbVRDN1CX0FVQc=/fit-in/792x651/top/filters:format_auto():upscale()/2018/05/15/548/n/42718227/eb0833315aface08ef8d61.75638390_.jpg",
		],
		address = "some random streat",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = resturant;
	const Title = styled.Text`
		text-align: center;
		text-transform: capitalize;
		padding: 16px;
	`;
	const ResturantCard = styled(Card)`
		background-color: white;
		justify-content: "center";
		align-items: "center";
		padding-vertical: 20px;
	`;
	const ResturantCardCover = styled(Card.Cover)`
		background-color: white;
		width: 300px;
		height: 300px;
		over-flow:'hidden';
		borderRadius: 1000px;
		border-width: 3px;
		border-color: white;
	`;
	return (
		<ResturantCard elevation={5} style={styles.card}>
			<ResturantCardCover source={{ uri: photos[0] }} />
			<Title>{name}</Title>
		</ResturantCard>
	);
};
const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 20,
	},
	cover: {},
});
