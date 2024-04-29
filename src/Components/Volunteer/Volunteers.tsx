import VolunteerCard from "./VolunteerCard";

function Volunteers(): JSX.Element {
    return (
        <>
            {[1, 2, 3].map(el => <VolunteerCard key={el} data={el} />)}
        </>
    );
}

const volunteersRoute: route = {
    path: "/volunteers",
    element: <Volunteers />,
    children: []
}

export default volunteersRoute;