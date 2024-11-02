import { List } from "react-native-paper";
import { useContext } from "react";
import { ResturantDetailsContext } from "../../../../../services/resturan-details/resturant-details.context";
import { AccordionList } from "../accordion-list/accordion-list.components";
export const ResturantInfoLists = () => {
	const {
		breakfastExpand,
		setBreakfastExpand,
		lunchExpand,
		setLunchExpand,
		dinnerExpand,
		setDinnerExpand,
		drinksExpand,
		setDrinksExpand,
	} = useContext(ResturantDetailsContext);
	return (
		<List.Section title="Food Categories">
			<AccordionList
				title="Breakfast"
				iconName={"cupcake"}
				expandedValue={breakfastExpand}
				pressHandler={setBreakfastExpand}
			>
				<List.Item title="Scrambled Eggs with Smoked Trout and Crème Fraîche" />
				<List.Item title="Double Apple Baked Oatmeal" />
				<List.Item title="Customizable Egg Muffins" />
			</AccordionList>
			<AccordionList
				title="Lunch"
				iconName={"food-turkey"}
				expandedValue={lunchExpand}
				pressHandler={setLunchExpand}
			>
				<List.Item title="Chicken Fried Rice" />
				<List.Item title="Creamy Peanut-Lime Chicken With Noodles" />
				<List.Item title="Gnocchi Antipasto Salad" />
				<List.Item title="Chicken Fried Rice" />
			</AccordionList>
			<AccordionList
				title="Dinner"
				iconName={"pizza"}
				expandedValue={dinnerExpand}
				pressHandler={setDinnerExpand}
			>
				<List.Item title="Honey BBQ Chicken Wings" />
				<List.Item title="Garlic Broccoli Shrimp Stir Fry" />
				<List.Item title="One-Pot Creamy Tuscan Pasta" />
				<List.Item title="Honey Soy-Glazed Salmon" />
			</AccordionList>
			<AccordionList
				title="Drinks"
				iconName={"food-fork-drink"}
				expandedValue={drinksExpand}
				pressHandler={setDrinksExpand}
			>
				<List.Item title="Berry protein smoothie" />
				<List.Item title="Peanut butter smoothie" />
				<List.Item title="Blueberry smoothie recipe" />
				<List.Item title="Pineapple smoothie" />
			</AccordionList>
		</List.Section>
	);
};
