import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Card from "../HTMLcomponents/Card/Card";

function ActivityCard({ data, deleteData }: { data: activityData, deleteData: (id: string, data: string) => void }): JSX.Element {
    const { user }: userContextProvider = useContext(UserContext);
    return (
        <Card>
            <Card.Element>
                <Card.Row>
                    <h2>{data.title}</h2>
                </Card.Row>
                <Card.Row>
                    <h3>Organizirala udruga: {data.organisation}</h3>
                </Card.Row>
            </Card.Element>
            <img style={imgStyle} src="https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0" alt="placeholder" />
            <Card.Link linkUrl={"/activities/activity/" + data.id} />
            {user === "admin" ? <button className="deleteElement" onClick={() => deleteData(data.id, "activities")}>&#x2716;</button> : <></>}
        </Card>
    );
}

export default ActivityCard;

const imgStyle = {
    width: "20%",
    paddingLeft: "4%",
    top: "50%",
    transform: "translateY(17%)"
}