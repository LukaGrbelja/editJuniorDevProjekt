import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Card from "../HTMLcomponents/Card/Card";
import axios from "axios";

function ActivityCard({ data }: { data: any }): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <Card>
            <Card.Element>
                <Card.Row>
                    <h2>{data.title}</h2>
                </Card.Row>
                <Card.Row>
                    <h3>Organizirala udruga: {data.user}</h3>
                </Card.Row>
            </Card.Element>
            <img style={{ width: "20%", paddingLeft: "4%", top: "50%", transform: "translateY(17%)" }} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            <Card.Link linkUrl={"/activities/activity/" + data.id} />
            {user === "admin" ? <button className="deleteElement" onClick={() => { axios.delete("http://localhost:5173/activities/" + data.id) }}>&#x2716;</button> : <></>}
        </Card>
    );
}

export default ActivityCard;