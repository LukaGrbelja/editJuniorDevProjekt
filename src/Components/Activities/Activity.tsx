import { Form, redirect, useParams } from "react-router-dom";
import Card from "../HTMLcomponents/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const activityAction = async (id: any) => {
    let data;

    await axios.get("http://localhost:3000/activities/" + id)
        .then(res => { data = res.data.volunteers; return 0; })
        .then(() => data.push("CurrentUser"));


    await axios.patch("http://localhost:3000/activities/" + id, {
        volunteers: data
    }).then(res => res.data);
}

function Activity(): JSX.Element {
    const [aktivnost, postaviAktivnost] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3000/activities/" + id)
            .then(response => postaviAktivnost(response.data));
    }, []);

    return (
        <>
            <Card.Row>
                <h1>{aktivnost.title}</h1>
            </Card.Row>
            <Card.Row>
                <Card.Element>
                    <h2>Organizator: {aktivnost.user}</h2>
                    <Card.Link linkUrl="/" />
                </Card.Element>
                <img style={{ width: "20%", paddingLeft: "4%", top: "50%", transform: "translateY(17%)" }} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            </Card.Row>
            <Card.Row>
                <p>{aktivnost.description}</p>
            </Card.Row>
            <Card.Row>
                <Form method="post">
                    <button name="intent" value={JSON.stringify({ intent: "Posalji", id: id })}>Prijavi se</button>
                </Form>
            </Card.Row>
        </>
    );
}

const activityRoute: route = {
    path: "/activities/activity/:id",
    element: <Activity />,
    action: async ({ request }: { request: Body }) => {
        const formData = await request.formData();
        const { intent, id } = JSON.parse(formData.get("intent") as string);
        await activityAction(id);
        return null;
    },
    children: []
}

export default activityRoute;