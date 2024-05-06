import { Outlet } from "react-router-dom";
import indexRoute from "./Index";
import activitiesRoute from "./Activities/Activities";
import activityRoute from "./Activities/Activity";
import volunteersRoute from "./Volunteer/Volunteers";
import volunteerRoute from "./Volunteer/Volunteer";
import associationsRoute from "./Associations/Associations";
import userHandlerRoute from "./UserHandler";
import addActivityRoute from "./Activities/AddActivity";
import addAssociationRoute from "./Associations/AddAssociation";
import addVolunteerRoute from "./Volunteer/AddVolunteer";
import Navigation from "./Navigation";

function Root(): JSX.Element {
    return (
        <>
            <Navigation />
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
                addAssociationRoute
            ]
        },
        userHandlerRoute
    ]
}

export default rootRoute;