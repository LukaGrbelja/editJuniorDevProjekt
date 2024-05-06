import loader from "../HTMLcomponents/loader";
import AssociationCard from "./AssociationCard";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import MainComponent from "../HTMLcomponents/MainContent";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

const associationLoader = loader("http://localhost:3000/associations");

function Associations(): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <MainComponent title="Udruge">
            {user ?
                <Link to="/associations/add/">
                    <button className="dodaj">
                        Dodaj<span>+</span>
                    </button>
                </Link> : <></>
            }
            <ResolvedData Card={AssociationCard} filter={() => true} />
        </MainComponent>
    );
}

const associationsRoute: route = {
    path: "/associations",
    element: <Associations />,
    loader: async () => {
        return associationLoader;
    },
    children: []
}

export default associationsRoute;