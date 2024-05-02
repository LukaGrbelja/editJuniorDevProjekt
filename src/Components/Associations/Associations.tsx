import loader from "../HTMLcomponents/loader";
import AssociationCard from "./AssociationCard";
import ResolvedData from "../HTMLcomponents/ResolvedData";
import MainComponent from "../HTMLcomponents/MainContent";

const associationLoader = loader("http://localhost:3000/associations");

function Associations(): JSX.Element {
    return (
        <MainComponent title="Udruge">
            <ResolvedData Card={AssociationCard} />
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