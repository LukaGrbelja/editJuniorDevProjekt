import { useContext } from "react";
import Card from "../HTMLcomponents/Card/Card";
import { UserContext } from "../../Contexts/UserContext";

function AssociationCard({ data, deleteData }: { data: associationData, deleteData: (id: string) => void }): JSX.Element {
    const { user }: userContextProvider = useContext(UserContext);
    return (
        <Card>
            <Card.Row>
                <Card.Element>
                    <h2>{data.name}</h2>
                    <h5>E-mail: {data.email}</h5>
                </Card.Element>
                <Card.Element>
                    Grad: {data.location}<br /><br />
                    Adresa: {data.address}
                </Card.Element>
            </Card.Row>
            {user === "admin" ? <button className="deleteElement" onClick={() => deleteData(data.id)}>&#x2716;</button> : <></>}
            <br />
        </Card>
    );
}

export default AssociationCard;