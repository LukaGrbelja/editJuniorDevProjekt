import { useContext } from "react";
import NavigationElement from "./HTMLcomponents/NavigationElement";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";

function Navigation() {
    const { user, logOut }: userContextProvider = useContext(UserContext);
    let data: Array<navElementData> = [
        {
            link: "/",
            text: "Pocetna"
        },
        {
            link: "/activities",
            text: "Aktivnosti"
        },
        {
            link: "/volunteers",
            text: "Volonteri"
        },
        {
            link: "/associations",
            text: "Udruge"
        },
    ]
    return (
        <nav>
            {data.map((dataElement: navElementData) =>
                <NavigationElement key={dataElement.link} data={dataElement} />
            )}
            {user ?
                <>
                    <div className="dropdown">
                        <button className="dropbotun">{user}</button>
                        <div onClick={logOut} className="dropdown-content">
                            <span>Odjava</span>
                        </div>
                    </div>
                </>
                :
                <>
                    <Link to={"/userHandler/logIn"}>
                        <button>Prijava</button>
                    </Link>
                </>
            }
        </nav>
    );
}

export default Navigation;