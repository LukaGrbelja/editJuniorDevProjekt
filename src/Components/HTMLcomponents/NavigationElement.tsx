import { NavLink } from "react-router-dom";

function NavigationElement({ data }: { data: navElementData }) {
    let { link, text }: navElementData = data;
    return (
        <NavLink to={link} style={({ isActive }) => ({ color: isActive ? "white" : "#646cff" })}>
            {text}
        </NavLink>
    );
}

export default NavigationElement;