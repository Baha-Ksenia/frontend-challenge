import { AppDispatch, RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCats } from "../../store/store.acions";
import { Card } from '../Card';
import {StyledGallary} from "./CatGallary.style";
import {CatGalleryProps} from "./CatGallary.type";
import {LoadingState} from "../../store/store.type";

export const CatGallery = ({ catsOverride }: CatGalleryProps) => {
    const dispatch = useAppDispatch();
    const { cats, status, error } = useSelector((state: RootState) => state.cats);
    const displayCats = catsOverride || cats;

    useEffect(() => {
        if (!catsOverride && cats.length === 0) {
            (dispatch)(fetchCats({ limit: 30, page: 0 }));
        }
    }, [dispatch, catsOverride]);

    if ((status === LoadingState.IDLE || status===LoadingState.LOADING) && !catsOverride) {
        return <p>Загружаем котиков...</p>;
    }

    if (status === LoadingState.REJECTED) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <StyledGallary>
            {displayCats && displayCats.length > 0 ? (
                displayCats.map((cat) => (
                    <Card key={cat.id} id={cat.id} url={cat.url} />
                ))
            ) : (
                <p>Тут котиков нет.</p>
            )}
        </StyledGallary>
    );
};