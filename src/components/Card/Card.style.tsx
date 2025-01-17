import styled from "styled-components";
import favorite_border from '../../constants/favorite_border.svg'
import favorite from '../../constants/favorite.svg'
import {COLORS} from "../../constants/colors";



export const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    

    `
export const StyledImgBottom = styled.div`
    background-image: url("${favorite_border}");
    

    `
export const StyledButton = styled.button<{$isFavorite: boolean}>`
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    border: none;
    background-image: url("${({$isFavorite}) => ($isFavorite ? favorite : favorite_border)}");
    background-color: transparent;

    outline: none;
    width: 45px;
    height: 45px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 2;
`
export const StyledCard = styled.div`
    position: relative;
    width: 225px;
    height: 225px;
    overflow: hidden;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
        width: calc(225px + 32px);
        height: calc(225px + 32px);
        margin: -16px;
        border: 16px solid ${COLORS.BACKGROUND};
        box-shadow: 0 9px 18px rgba(0, 0, 0, 0.18);

    }
    
    &:hover ${StyledButton} {
        opacity: 1;
        
    }

    &::after {
        content: '';
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 94px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 59%);
        z-index: 1;
    }

    &:hover::after {
        display: block;
    }
`