function Volunteer(): JSX.Element {
    return (
        <>
            Volonter
        </>
    );
}

const volunteerRoute: route = {
    path: "/volunteers/volunteer/:id",
    element: <Volunteer />,
    children: []
}

export default volunteerRoute;