import AssociationCard from "./AssociationCard";

function Associations(): JSX.Element {
    return (
        <>
            {[1, 2, 3].map(el => <AssociationCard key={el} data={el} />)}
        </>
    );
}

const associationsRoute: route = {
    path: "/associations",
    element: <Associations />,
    children: []
}

export default associationsRoute;