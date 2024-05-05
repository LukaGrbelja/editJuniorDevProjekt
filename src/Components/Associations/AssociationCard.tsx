import { useContext } from "react";
import Card from "../HTMLcomponents/Card/Card";
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

function AssociationCard({ data }: { data: any }): JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <Card>
            <Card.Row>
                <Card.Element>
                    <h2>{data.name}</h2>
                </Card.Element>
                <h5>{data.city}</h5>
            </Card.Row>
            <Card.Link linkUrl={"/associations/association/" + data.id} />
            {user === "admin" ? <button className="deleteElement" onClick={() => { axios.delete("http://localhost:5173/associations/" + data.id) }}>izbrisi</button> : <></>}
        </Card>
    );
}

export default AssociationCard;