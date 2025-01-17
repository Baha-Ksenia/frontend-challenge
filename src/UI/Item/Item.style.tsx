import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const StyledItem = styled.li<{ $isChosen: boolean }>`
    background-color: ${({ $isChosen }) =>
            $isChosen ? COLORS.NAVBARITEM : 'transparent'};
    height: 100%;
    padding: 0 23px;
    display: flex;
    letter-spacing: 0.25px;
    font-size: 14px;
    align-items: center;
    transition: background-color 0.3s ease;

    a {
        text-decoration: none;
        color: ${COLORS.TEXT};
        font-size: 14px;
        font-weight: 400;
        opacity: ${({$isChosen}) => ($isChosen ? 1 : 0.7)};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
`;