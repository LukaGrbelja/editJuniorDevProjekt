import { useContext } from "react";
import { NavLink, Outlet, Form } from "react-router-dom";
import indexRoute from "./Index";
import activitiesRoute from "./Activities/Activities";
import activityRoute from "./Activities/Activity";
import volunteersRoute from "./Volunteer/Volunteers";
import volunteerRoute from "./Volunteer/Volunteer";
import associationsRoute from "./Associations/Associations";
import associationRoute from "./Associations/Association";

function Root(): JSX.Element {

    return (
        <>
            <nav>
                <NavLink to={"/"}>Pocetna</NavLink>
                <NavLink to={"/activities"}>Aktivnosti</NavLink>
                <NavLink to={"/volunteers"}>Volonteri</NavLink>
                <NavLink to={"/associations"}>Udruge</NavLink>
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
                activityRoute
            ]
        },
        {
            path: "/volunteers",
            element: <Outlet />,
            children: [
                volunteersRoute,
                volunteerRoute
            ]
        },
        {
            path: "/associations",
            element: <Outlet />,
            children: [
                associationsRoute,
                associationRoute
            ]
        }
    ]
}

export default rootRoute;