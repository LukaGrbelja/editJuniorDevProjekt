import ExternalLink from "./HTMLcomponents/ExternalLink";

function Index(): JSX.Element {
    return (
        <>
            <h1>Pocetna</h1>
            <div className="intro">
                Ova web stranica namijenjena je korisnicima koji žele sudjelovati u volonterskim aktivnostima. Na stranici možete pronaći informacije o trenutnim volonterskim projektima, udruženjima i volonterima. Također, imate mogućnost predstaviti sebe kao volontera ili pronaći druge volontere s kojima biste željeli surađivati.
                <br /><br />Neke funkcionalnosti stranice:
                <ul>
                    <li>Pretraživanje volonterskih aktivnosti: Korisnici mogu pretraživati trenutne volonterske projekte prema interesima, lokaciji ili vremenskom periodu. To će im omogućiti da pronađu aktivnosti koje najbolje odgovaraju njihovim preferencijama.</li>
                    <li>Profil volontera: Svaki volonter može stvoriti svoj profil na stranici. Ovdje mogu dodati informacije o sebi, svojim vještinama i iskustvu. To će pomoći drugim korisnicima da bolje razumiju tko ste i kako mogu surađivati s vama.</li>
                    <li>Ocjene i recenzije: Nakon sudjelovanja u volonterskim aktivnostima, korisnici mogu ostaviti ocjene i recenzije za udruženja i druge volontere. Ovo će pomoći drugima da donesu informirane odluke o sudjelovanju u određenim projektima.</li>

                </ul>
            </div>
            <h2>Predstavljanje autora</h2>
            <p>
                Mi smo tim entuzijastičnih programera koji su se udružili kako bismo stvorili ovu platformu. Naša strast je pomoći zajednici i omogućiti ljudima da se angažiraju u volonterskim aktivnostima. Saznajte više o našim članovima na našem Github profilu.
            </p>
            <h2>Kontakt</h2>
            <p>
                Ako imate pitanja ili želite sudjelovati u našem projektu, slobodno nas kontaktirajte putem kontakt forme ili posjetite naš LinkedIn profil.
            </p>
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