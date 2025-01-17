import React, {useEffect, useState} from "react";
import {StyledGallary} from "../../components/CatGallary/CatGallary.style";
import {Card} from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {StyledLove} from "./Love.style";
import {CatGallery} from "../../components/CatGallary/CatGallary";
import {loadFavorites} from "../../store/store.reduser";

export const Love = () => {
   const dispatch = useDispatch();
   const favoriteIds = useSelector((state: RootState) => state.cats.favorites);
   const allCats = useSelector((state: RootState) => state.cats.cats);

   useEffect(() => {
      dispatch(loadFavorites());
   }, [dispatch]);

   const favoriteCats = allCats.filter((cat) => favoriteIds.includes(cat.id));

   return (
       <StyledLove>
          <CatGallery catsOverride={favoriteCats} />
       </StyledLove>
   );
};