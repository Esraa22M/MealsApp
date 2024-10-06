import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturantScreen } from "./src/features/resturants/screens/resturants.screens";
export default function App() {
	return (
		<>
		<ResturantScreen/>
			<ExpoStatusBar style="auto" />
		</>
	);
}

