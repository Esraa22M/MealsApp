import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ResturantsNavigator } from "./resturant.navigator";
import { Container } from "../../components/utils/safe-area.components";
const Tab = createBottomTabNavigator();
const Map = () => {
	return (
		<Container>
			<Text>map</Text>
		</Container>
	);
};
const Settings = () => {
	return (
		<Container>
			<Text>settings</Text>
		</Container>
	);
};
const TAB_ICON = {
	ResturantScreen: { icon: "restaurant", iconPackage: MaterialIcons },
	settings: { icon: "app-settings-alt", iconPackage: MaterialIcons },
	map: { icon: "map-marker-alt", iconPackage: Fontisto },
};
const createScreenOptions = ({ route }) => ({
	headerShown: false,
    tabBarStyle: { padding: 10 },
	tabBarIcon: ({ color, size }) => {
		const iconName = TAB_ICON[route.name].icon;
		const PackageName = TAB_ICON[route.name].iconPackage;
		return <PackageName name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: "tomato",
	tabBarInactiveTintColor: "gray",
});
export const TabNavigation = () => (
	<Tab.Navigator screenOptions={createScreenOptions}>
		<Tab.Screen component={ResturantsNavigator} name="ResturantScreen" />
		<Tab.Screen component={Map} name="map" />
		<Tab.Screen component={Settings} name="settings" />
	</Tab.Navigator>
);
