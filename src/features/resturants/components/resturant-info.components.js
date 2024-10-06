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
	const Title = styled.Text`  text-align: center;text-transform: capitalize;
padding:16px;
`;
	return (
		<Card elevation={5} style={styles.card}>
			<Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
			<Title>{name}</Title>
		</Card>
	);
};
const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 20,
	},
	cover: {
		backgroundColor: "white",
		width: 300,
		height: 300,
		borderRadius: 300 / 2,
		overflow: "hidden",
		borderWidth: 3,
		borderColor: "white",
	},
});
