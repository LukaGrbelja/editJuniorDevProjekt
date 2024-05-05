import loader from "../HTMLcomponents/loader";
import VolunteerCard from "./VolunteerCard";
import MainComponent from "../HTMLcomponents/MainContent";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const volunteerLoader = loader("http://localhost:3000/volunteers");

function Volunteers(): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <MainComponent title="Volonteri">
            {user ?
                <Link to="/volunteers/add/">
                    <button className="dodaj">
                        Dodaj<span>+</span>
                    </button>
                </Link> : <></>
            }
            <ResolvedData Card={VolunteerCard} />
        </MainComponent>
    );
}

const volunteersRoute: route = {
    path: "/volunteers",
    element: <Volunteers />,
    loader: async () => {
        return volunteerLoader;
    },
    children: []
}

export default volunteersRoute;