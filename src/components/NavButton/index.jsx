import { NavLink } from "react-router-dom";
import Button from "../Button";
const NavButton = ({ path, text }) => {
    return (
        <NavLink to={path}>
            {({ isActive }) => (
                <Button isActive={isActive} text={text} />
            )}
        </NavLink>
    );
};

export default NavButton;