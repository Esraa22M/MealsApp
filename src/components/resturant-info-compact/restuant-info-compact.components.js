import {
	ItemContainer,
	CompactInfoImage,
	CompactWebview,
} from "./resturant-info-compact.styles";
import { Spacer } from "../spacer/spacer.component";
import { Platform } from "react-native";
import { TextComponent } from "../typography/text.components";
const isAndroid = Platform.OS === "android";

export const ResturantInfoCompact = ({ resturant, isMap }) => {
	const Image = isAndroid && isMap ? CompactWebview : CompactInfoImage;
	return (
		<ItemContainer>
			<Spacer postion={"top"} size="medium" />
			<Image
				source={{
					uri: resturant.photos[0],
				}}
			/>
			<Spacer postion={"bottom"} size="medium" />

			<TextComponent variant="caption" numberOfLines={3}>
				{resturant.name}
			</TextComponent>
		</ItemContainer>
	);
};
