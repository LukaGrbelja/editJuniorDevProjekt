import Card from "../HTMLcomponents/Card/Card";

function VolunteerCard({ data }: any): JSX.Element {
    return (
        <Card>
            <Card.Row>
                <img style={{ width: "50%" }} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            </Card.Row>
            <hr />
            <h2>{data.name} {data.surname}</h2>
            <Card.Row>
                Kontakt:
            </Card.Row>
            Prethodne aktivnosti
            <ul>
                {data.activities.map((el: any) => <li>1</li>)}/**Dodaj key */
            </ul>
            <Card.Link linkUrl={"/volunteers/volunteer/" + data.id} />
        </Card>
    );
}

export default VolunteerCard;