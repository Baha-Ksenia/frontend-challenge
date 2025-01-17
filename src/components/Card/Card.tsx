import {Cat} from "../../store/store.type";
import {useState} from "react";
import {StyledButton, StyledCard, StyledImg, StyledImgBottom} from "./Card.style";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {toggleFavorite} from "../../store/store.reduser";


export const Card = ({ id, url }: Cat ) => {

    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) => state.cats.favorites?.includes(id));

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(id));
    };

    return (
        <StyledCard>
            <StyledButton
                onClick={handleToggleFavorite}
                $isFavorite={isFavorite}/>
            <StyledImg
                src={url}
                alt="Cat"/>
        </StyledCard>
    );
};
