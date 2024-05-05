import { useContext } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import indexRoute from "./Index";
import activitiesRoute from "./Activities/Activities";
import activityRoute from "./Activities/Activity";
import volunteersRoute from "./Volunteer/Volunteers";
import volunteerRoute from "./Volunteer/Volunteer";
import associationsRoute from "./Associations/Associations";
import associationRoute from "./Associations/Association";
import userHandlerRoute from "./UserHandler";
import { UserContext } from "../Contexts/UserContext";
import addActivityRoute from "./Activities/AddActivity";
import addAssociationRoute from "./Associations/AddAssociation";
import addVolunteerRoute from "./Volunteer/AddVolunteer";

function Root(): JSX.Element {
    const { user, logOut }: any = useContext(UserContext);
    return (
        <>
            <nav>
                <NavLink to={"/"}>Pocetna</NavLink>
                <NavLink to={"/activities"}>Aktivnosti</NavLink>
                <NavLink to={"/volunteers"}>Volonteri</NavLink>
                <NavLink to={"/associations"}>Udruge</NavLink>
                {user ?
                    <>
                        {user}
                        <button onClick={logOut}>Odjava</button>
                    </>
                    :
                    <>
                        <Link to={"/userHandler/logIn"}>
                            <button>Prijava</button>
                        </Link>
                    </>
                }
            </nav>
            <div className="mainContent">
                <Outlet />
            </div>
        </>
    );
}

const rootRoute: route = {
    path: "/",
    element: <Root />,
    children: [
        indexRoute,
        {
            path: "/activities",
            element: <Outlet />,
            children: [
                activitiesRoute,
                activityRoute,
                addActivityRoute
            ]
        },
        {
            path: "/volunteers",
            element: <Outlet />,
            children: [
                volunteersRoute,
                volunteerRoute,
                addVolunteerRoute
            ]
        },
        {
            path: "/associations",
            element: <Outlet />,
            children: [
                associationsRoute,
                associationRoute,
                addAssociationRoute
            ]
        },
        userHandlerRoute
    ]
}

export default rootRoute;