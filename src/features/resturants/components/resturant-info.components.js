import { Avatar, Button, Card, Text } from "react-native-paper";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/icons/star.js";
import open from "../../../../assets/icons/open.js";
export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "some resturant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://media1.popsugar-assets.com/files/thumbor/vIAZ7xK3B0qJKKbVRDN1CX0FVQc=/fit-in/792x651/top/filters:format_auto():upscale()/2018/05/15/548/n/42718227/eb0833315aface08ef8d61.75638390_.jpg",
		],
		address = "some random streat",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily=true,
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
		padding: 0px ${(props) => props.theme.space[3]};
		color: ${(props) => props.theme.colors.ui.primary};
		font-family: ${(props) => props.theme.fonts.heading};
		font-size: ${(props) => props.theme.fontSizes.body};
	`;
	const Address = styled.Text`
		font-family: ${(props) => props.theme.fonts.body};
		text-align: center;
		font-size: ${(props) => props.theme.fontSizes.caption};
	`;
	const RatingContainer = styled.View`
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: ${(props) => props.theme.space[2]};
		padding-bottom: ${(props) => props.theme.space[2]};
	`;
	const RowView = styled(View)`
		flex-direction: row;
	`;
	const IconsContainerView = styled(View)`
		flex-direction: row;

		justify-content: space-between;
	`;
	const Icon = styled(Image)`
		width: 25px;
		height: 25px;
	`;
	let ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<ResturantCard elevation={5}>
			<IconsContainerView>
				<RowView>
					{isClosedTemporarily && <Text>is closed temporarily</Text>}
					{isOpenNow && <SvgXml xml={open} width={30} height={30} />}
				</RowView>
				<RowView>
					<Icon source={{ uri: icon }} />
				</RowView>
			</IconsContainerView>

			<ResturantCardCover source={{ uri: photos[0] }} />
			<CardBody>
				<Title>{name}</Title>
				<RatingContainer>
					{ratingArray.map((item, index) => (
						<SvgXml xml={star} width={20} height={20} key={index} />
					))}
				</RatingContainer>
				<Address>{address}</Address>
			</CardBody>
		</ResturantCard>
	);
};
