import ActivityCard from "./ActivityCard";
import loader from "../HTMLcomponents/loader";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import MainComponent from "../HTMLcomponents/MainContent";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

const activityLoader = loader("http://localhost:3000/activities");

function Activities(): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <MainComponent title="Aktivnosti">
            {user ?
                <Link to="/activities/add/">
                    <button className="dodaj">
                        Dodaj<span>+</span>
                    </button>
                </Link> : <></>
            }
            <ResolvedData Card={ActivityCard} />
        </MainComponent>
    );
}

const activitiesRoute: route = {
    path: "/activities",
    element: <Activities />,
    loader: async () => {
        return activityLoader;
    },
    children: []
}

export default activitiesRoute;