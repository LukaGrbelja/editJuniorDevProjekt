import ExternalLink from "./HTMLcomponents/ExternalLink";

function Index(): JSX.Element {
    return (
        <>
            <h1>Pocetna</h1>
            <p>i neki tekst</p>
            <span>Lorem ipsum</span>
            <ExternalLink url="https://github.com/LukaGrbelja/editJuniorDevProjekt" tekst="Github profil" />
        </>
    );
}

const indexRoute: route = {
    path: "/",
    element: <Index />,
    children: []
}

export default indexRoute;