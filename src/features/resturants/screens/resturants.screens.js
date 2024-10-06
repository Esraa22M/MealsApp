import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCard } from "../components/resturant-info.components";
import { SafeAreaView } from 'react-native-safe-area-context';
export const ResturantScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar />
			</View>
			<View style={styles.list}>
                <ResturantInfoCard/>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { padding: 16},
	list: { flex: 1, backgroundColor: "blue", padding: 16 },
});