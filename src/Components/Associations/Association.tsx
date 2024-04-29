function Association(): JSX.Element {
    return (
        <>
            Volonter
        </>
    );
}

const associationRoute: route = {
    path: "/associations/association/:id",
    element: <Association />,
    children: []
}

export default associationRoute;