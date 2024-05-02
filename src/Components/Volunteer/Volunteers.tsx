import loader from "../HTMLcomponents/loader";
import VolunteerCard from "./VolunteerCard";
import MainComponent from "../HTMLcomponents/MainContent";
import ResolvedData from "../HTMLcomponents/ResolvedData";

const volunteerLoader = loader("http://localhost:3000/volunteers");

function Volunteers(): JSX.Element {
    return (
        <MainComponent title="Volonteri">
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