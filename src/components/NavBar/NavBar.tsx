import {StyledLinksList, StyledNavBar} from "./NavBar.style";
import {getRouteName, RoutesPaths} from "../../constants/RoutesPaths";
import {Item} from "../../UI/Item";

export const NavBar = () => {

    return(
        <StyledNavBar>
            <StyledLinksList>
            {Object.keys(RoutesPaths).map((key) => {
                const path = RoutesPaths[key as keyof typeof RoutesPaths];
                return (
                    <Item
                        key={path}
                        name={getRouteName(path)}
                        path={path}
                    />
                );
            })}
            </StyledLinksList>

        </StyledNavBar>
    )
}