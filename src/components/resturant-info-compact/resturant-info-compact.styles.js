import styled from "styled-components/native";
import { Image, View } from "react-native";
import WebView from "react-native-webview";
export const ItemContainer = styled(View)`
	padding: 10px;
	max-width: 120px;
	align-items: "center";
`;
export const CompactWebviewWrapper = styled(View)`
	border-radius: 10px;
    width: 120px;
	height: 100px;
	overflow: "hidden";

`;
export const CompactWebview = styled(WebView)`
	width: 120px;
	height: 100px;
`;
export const CompactInfoImage = styled(Image)`
	border-raduis: 10px;
	width: 120px;
	height: 100px;
`;
