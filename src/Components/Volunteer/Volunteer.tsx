import { useEffect, useState } from "react";
import Card from "../HTMLcomponents/Card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

function Volunteer(): JSX.Element {
    const [volonter, postaviVolontera] = useState<volunteerData>({
        id: "",
        name: "",
        surname: "",
        location: "",
        age: 0,
        description: "",
        activities: []
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/volunteers/${id}`)
            .then((response) => postaviVolontera(response.data))
    }, [id]);
    return (
        <>
            <Card.Row>
                <img style={{ width: "30%" }} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
                <h2>{volonter.name} {volonter.surname}</h2>
                <Card.Element>
                    Grad: {volonter.location}<br />
                    Godine: {volonter.age}<br />
                    Aktivnosti:
                    <ul>
                        {volonter.activities.map((el: string) => <li key={el}>{el}</li>)}
                    </ul>
                </Card.Element>
                <Card.Element>
                <h3>O meni</h3>
                <p>{volonter.description}</p>
                </Card.Element>
            </Card.Row>
        </>
    );
}

const volunteerRoute: route = {
    path: "/volunteers/volunteer/:id",
    element: <Volunteer />,
    children: []
}

export default volunteerRoute;