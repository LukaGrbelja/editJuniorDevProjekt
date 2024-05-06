import loader from "../HTMLcomponents/loader";
import VolunteerCard from "./VolunteerCard";
import MainComponent from "../HTMLcomponents/MainContent";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Filter from "./Filter";

const volunteerLoader = loader("http://localhost:3000/volunteers");

function Volunteers(): JSX.Element {
    const { user }: userContextProvider = useContext(UserContext);
    const [filterState, setFilter] = useState({
        city: "",
        activity: ""
    });

    const filter = (el: volunteerData) => {
        return (
            (filterState.city === "" && filterState.activity === "") ||
            (filterState.city === el.location && filterState.activity === "") ||
            (filterState.city === "" && el.activities.indexOf(filterState.activity) !== -1) ||
            (filterState.city === el.location && el.activities.indexOf(filterState.activity) !== -1)
        );

    }
    return (
        <MainComponent title="Volonteri">
            <>
                {user ?
                    <Link to="/volunteers/add/">
                        <button className="dodaj">
                            Dodaj<span>+</span>
                        </button>
                    </Link> : <></>
                }
                <Filter filter={filterState.activity} setFilter={(str: string) => setFilter({ ...filterState, activity: str })} />
            </>
            <ResolvedData key={filterState.activity} Card={VolunteerCard} filter={(el: volunteerData) => filter(el)} />
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