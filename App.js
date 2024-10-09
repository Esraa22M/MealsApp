// import { useCallback } from "react";
// import { View , Text} from "react-native";
// import { ResturantScreen } from "./src/features/resturants/screens/resturants.screens";
// import { theme } from "./src/infastructure/theme";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// export default function App() {
// 	const [fontsLoaded, error] = useFonts({
// 		'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
// 	});

// 	const onLayoutRootView = useCallback(async () => {
// 		if (!fontsLoaded) {
// 			await SplashScreen.hideAsync();
// 		}
// 	}, [fontsLoaded]);
// 	console.log(error, fontsLoaded)
// 	return (
// 		<View onLayout={onLayoutRootView} >
// 			<Text style={{fontFamily:'open-sans-bold'}}>esraa</Text>
// 			<ThemeProvider theme={theme} >
// 				<ResturantScreen onLayout={ onLayoutRootView} />
// 			</ThemeProvider>
// 			<ExpoStatusBar style="auto" />
// 		</View>
// 	);
// }
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import { useLayoutEffect , useState} from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/theme";
import { ResturantScreen } from "./src/features/resturants/screens/resturants.screens";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { LoadingOverLay } from "./src/ui/loading-overlay.components";
export default function App() {
	const [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Quicksand_400Regular,
	});
	if (!fontsLoaded) {
		return <LoadingOverLay/>;
	}

	return (
		<>
			{/* <ThemeProvider theme={theme}>
				<ResturantScreen  />
			</ThemeProvider>
			<ExpoStatusBar style="auto" /> */}
			<ThemeProvider theme={theme}>

				<ResturantScreen/>

					<ExpoStatusBar style="auto" />
			</ThemeProvider>
			
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	raleway: {
		fontSize: 20,
		fontFamily: "Raleway_400Regular",
	},
	quicksand: {
		fontSize: 20,
		fontFamily: "Quicksand_400Regular",
	},
});
