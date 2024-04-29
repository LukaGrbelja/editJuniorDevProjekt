import { Form, redirect } from "react-router-dom";
import { useContext } from "react";

function Activity(): JSX.Element {

    return (
        <>Aktivnost</>
    );
}

const activityRoute: route = {
    path: "/activities/activity/:id",
    element: <Activity />,
    children: []
}

export default activityRoute;