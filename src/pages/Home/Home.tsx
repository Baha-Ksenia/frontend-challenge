import React from "react";
import {CatGallery} from "../../components/CatGallary/CatGallary";
import {StyledHome} from "./Home.style";

export const Home = () => {
    return (
        <StyledHome>
            <CatGallery />
        </StyledHome>
    )
}