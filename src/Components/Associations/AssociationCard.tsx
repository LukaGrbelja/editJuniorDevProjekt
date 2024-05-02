import Card from "../HTMLcomponents/Card/Card";

function AssociationCard({data}: {data: any}): JSX.Element {
    return(
        <Card>
            <Card.Row>
                <Card.Element>
                    <h2>{data.name}</h2>
                </Card.Element>
                <h5>{data.city}</h5>
            </Card.Row>
            <Card.Link linkUrl={"/associations/association/" + data.id} />
        </Card>
    );
}

export default AssociationCard;