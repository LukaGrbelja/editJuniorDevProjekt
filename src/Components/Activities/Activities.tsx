import ActivityCard from "./ActivityCard";
import loader from "../HTMLcomponents/loader";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import MainComponent from "../HTMLcomponents/MainContent";

const activityLoader = loader("http://localhost:3000/activities");

function Activities(): JSX.Element {
    return (
        <MainComponent title="Aktivnosti">
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