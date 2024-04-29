import { Link } from "react-router-dom";

function AssociationCard({data}: {data: number}): JSX.Element {
    return(
        <>
            Kartica za Udruge
            <hr />
            <Link to={"/associations/association/" + data}>Link</Link>
        </>
    );
}

export default AssociationCard;