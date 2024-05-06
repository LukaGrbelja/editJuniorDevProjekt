import { useContext } from "react";
import Card from "../HTMLcomponents/Card/Card";
import { UserContext } from "../../Contexts/UserContext";

function VolunteerCard({ data, deleteData }: { data: volunteerData, deleteData: (id: string) => void }): JSX.Element {
    const { user }: userContextProvider = useContext(UserContext);
    return (
        <Card>
            <Card.Row>
                <img style={{ width: "50%" }} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            </Card.Row>
            <hr />
            <h2>{data.name} {data.surname}</h2>
            <Card.Row>
                Grad: {data.location}
            </Card.Row>
            <Card.Link linkUrl={"/volunteers/volunteer/" + data.id} />
            {user === "admin" ? <button className="deleteElement" onClick={() => deleteData(data.id)}>&#x2716;</button> : <></>}
        </Card>
    );
}

export default VolunteerCard;