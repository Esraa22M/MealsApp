import styled from "styled-components/native";
import { List } from "react-native-paper";
import { AccordionList } from "../accordion-list/accordion-list.components";
export const ListsWrapper = styled(AccordionList)`
	border-bottom-width: 1px;
    border-bottom-color: black;

    /* border-color:${(props)=>props.theme.colors.secondary} */
`;
