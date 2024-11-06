import {
	ItemContainer,
	CompactInfoImage,
    CompactWebview
} from "./resturant-info-compact.styles";
import { Platform } from "react-native";
import { TextComponent } from "../typography/text.components";
const isAndroid = Platform.OS === 'android';

export const ResturantInfoCompact = ({ resturant }) => {
    const Image = isAndroid ?  CompactWebview:CompactInfoImage;
	return (
		<ItemContainer>
				<Image
					source={{
						uri: resturant.photos[0],
					}}
				/>
			<TextComponent variant="caption" numberOfLines={3}>
				{resturant.name}
			</TextComponent>
		</ItemContainer>
	);
};
