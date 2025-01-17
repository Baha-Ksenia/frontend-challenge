
export interface Cat {
    id: string;
    url: string;
}


export interface CatsState {
    cats: Cat[];
    favorites: [];
    status: LoadingState;
    error: string | null;
    page: number;
}


export enum LoadingState {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED',
    LOADING = 'LOADING',
}