import { List } from "react-native-paper";
export const AccordionList = ({title, iconName, expandedValue, pressHandler, children}) => {
	return (
		<List.Accordion
			title={title}
			left={(props) => <List.Icon {...props} icon={iconName} />}
			expanded={expandedValue}
			onPress={pressHandler.bind(this, !expandedValue)}
		>{children }</List.Accordion>
	);
};
