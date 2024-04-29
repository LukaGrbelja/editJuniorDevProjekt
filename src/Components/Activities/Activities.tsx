import ActivityCard from "./ActivityCard";

function Activities(): JSX.Element {
    return (
        <>
            <h2>Aktivnosti</h2>
            {[1, 2, 3].map(el => <ActivityCard key={el} data={el} />)}
        </>
    );
}

const activitiesRoute: route = {
    path: "/activities",
    element: <Activities />,
    children: []
}

export default activitiesRoute;