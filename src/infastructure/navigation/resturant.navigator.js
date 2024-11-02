import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { ResturantScreen } from "../../features/resturants/screens/resturants-view/resturants.screens";
import { ResturantDetails } from "../../features/resturants/screens/resturant-details/resturant-details.screens";
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
	return (
		<ResturantsStack.Navigator screenOptions={{headerShown:false,presentation:'modal', }}>
			<ResturantsStack.Screen name="Resturants" component={ResturantScreen} />
            <ResturantsStack.Screen name="ResturantDetails" component={ResturantDetails} />

		</ResturantsStack.Navigator>
	);
};
