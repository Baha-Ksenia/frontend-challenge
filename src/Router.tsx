import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {RoutesPaths} from "./constants/RoutesPaths";
import { Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import { Love } from "./pages/Love";

import {NavBar} from "./components/NavBar/NavBar";
const Layout = () => {
    return (
        <>
            <NavBar />
            <div >
                <Outlet />
            </div>
        </>
    );
};

export const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index path={RoutesPaths.HOME} element={<Home />} />
            <Route path={RoutesPaths.LOVE} element={<Love />} />
        </Route>
    )
);