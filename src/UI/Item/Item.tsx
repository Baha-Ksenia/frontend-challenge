import {StyledItem} from "./Item.style";
import {Link, useLocation} from "react-router-dom";
import {COLORS} from "../../constants/colors";
import {ItemProps} from "./Item.type";

export const Item = ({path, name}: ItemProps) => {
    const {pathname} = useLocation();

    return(
        <StyledItem $isChosen={pathname === path}>
            <Link to={path}>
                <div>
                    {name}
                </div>
            </Link>
        </StyledItem>
    )
}