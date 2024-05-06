import { Form, redirect, useParams } from "react-router-dom";
import Card from "../HTMLcomponents/Card/Card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

const activityAction = async (id: string, currentUser: userContext) => {
    let data;

    await axios.get("http://localhost:3000/activities/" + id)
        .then(res => {
            data = res.data.volunteers;
            return 0;
        })
        .then(() => data.push(currentUser));


    await axios.patch("http://localhost:3000/activities/" + id, {
        volunteers: data
    }).then(res => res.data);
}

function Activity(): JSX.Element {
    const { user }: userContextProvider = useContext(UserContext);
    const [aktivnost, postaviAktivnost] = useState<activityData>({
        id: "",
        poster: "",
        title: "",
        organisation: "",
        location: "",
        date: "",
        description: "",
        volunteers: [],
    });
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
                    <h2>Organizator: {aktivnost.organisation}</h2>
                    <p>Objavio: {aktivnost.poster}</p>
                </Card.Element>
                <img style={imgStyle} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            </Card.Row>
            <Card.Row>
                <br />
                <h3>Grad: {aktivnost.location}</h3>
                <h4>Datum: {aktivnost.date}</h4>
                <p>{aktivnost.description}</p>
            </Card.Row>
            <Card.Row>
                {user !== null ?
                    aktivnost.volunteers.indexOf(user) !== -1 ?
                        <h3>Vec ste prijavljeni na ovu aktivnost</h3> :
                        <Form method="post">
                            <button name="intent" value={JSON.stringify({ intent: "Posalji", id: id })}>Prijavi se</button>
                        </Form>
                    : <></>
                }
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
        await activityAction(id, localStorage.getItem("user"));
        return redirect("/activities");
    },
    children: []
}

export default activityRoute;

const imgStyle = {
    width: "20%",
    paddingLeft: "4%",
    top: "50%",
    transform: "translateY(17%)"
}