import { Avatar, Button, Card, Text } from "react-native-paper";
import { View } from "react-native";
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

	const ResturantCard = styled(Card)`
		background-color: ${(props) => props.theme.colors.bg.primary};
		align-items: center;
		justify-content: center;
		padding-vertical: ${(props) => props.theme.space[3]};
	`;
	const ResturantCardCover = styled(Card.Cover)`
		background-color: ${(props) => props.theme.colors.bg.primary};
		width: ${(props) => props.theme.sizes[6]};
		height: ${(props) => props.theme.sizes[6]};
		border-radius: 1000px;
		over-flow: "hidden";
		border-width: ${(props) => props.theme.sizes[0]};
		border-color: white;
	`;
	const CardBody = styled.View`
		justify-content: "center";
		align-items: "center";
	`;
	const Title = styled.Text`
		text-align: center;
		text-transform: capitalize;
		padding: ${(props) => props.theme.space[3]};
		color: ${(props) => props.theme.colors.ui.primary};
		font-family: ${(props) => props.theme.fonts.heading};
		font-size: ${(props) => props.theme.fontSizes.body};
	`;
	const Address = styled.Text`
		font-family: ${(props) => props.theme.fonts.body};
		text-align: center;
		font-size: ${(props) => props.theme.fontSizes.caption};
	`;
	return (
		<ResturantCard elevation={5}>
			<ResturantCardCover source={{ uri: photos[0] }} />
			<CardBody>
				<Title>{name}</Title>
				<Address>{address}</Address>
			</CardBody>
		</ResturantCard>
	);
};
