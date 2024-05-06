import ExternalLink from "./HTMLcomponents/ExternalLink";

function Index(): JSX.Element {
    return (
        <>
            <h1>Početna</h1>
            <div className="intro">
                Ova web stranica namijenjena je korisnicima koji žele sudjelovati u volonterskim aktivnostima. Na stranici možete pronaći informacije o aktualnim volonterskim projektima, udruženjima i volonterima. Također, imate mogućnost predstaviti sebe kao volontera ili pronaći druge volontere s kojima biste željeli surađivati.
                <br /><br />Neke funkcionalnosti stranice:
                <ul>
                    <li>Pretraživanje volonterskih aktivnosti: Korisnici mogu pretraživati trenutne volonterske projekte prema interesima, lokaciji ili vremenskom periodu. To će im omogućiti da pronađu aktivnosti koje najbolje odgovaraju njihovim preferencijama.</li>
                    <li>Profil volontera: Svaki volonter može stvoriti svoj profil na stranici. Ovdje mogu dodati informacije o sebi, svojim vještinama i iskustvu. To će pomoći drugim korisnicima da bolje razumiju tko ste i kako mogu surađivati s vama.</li>
                </ul>
            </div>
            <h2>Napomena</h2>
            <p>Za brisanje i ostale mogućnosti prijaviti se pod korisničkim imenom "admin"</p>
            <ExternalLink url="https://github.com/LukaGrbelja/editJuniorDevProjekt" tekst="Github" />
        </>
    );
}

const indexRoute: route = {
    path: "/",
    element: <Index />,
    children: []
}

export default indexRoute;