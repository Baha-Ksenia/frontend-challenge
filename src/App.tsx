import {RouterProvider} from 'react-router-dom';
import {ROUTER} from "./Router";
import {GlobalStyle} from "./GlobalStyled";
import {Provider} from "react-redux";
import store from "./store";

export const App = () => {
    return (
        <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={ROUTER} />
        </Provider>
    );
};
