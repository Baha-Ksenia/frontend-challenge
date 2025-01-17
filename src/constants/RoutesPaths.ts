
export enum RoutesPaths {
    HOME = '/',
    LOVE= '/love',

}

export const getRouteName = (path: RoutesPaths): string => {
    switch (path) {
        case RoutesPaths.LOVE:
            return 'Любимые котики';
        case RoutesPaths.HOME:
            return 'Все котики';
        default:
            return '';
    }
};