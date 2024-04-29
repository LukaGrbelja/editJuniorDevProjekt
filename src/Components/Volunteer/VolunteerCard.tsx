import { Link } from "react-router-dom";

function VolunteerCard({data}: {data: number}): JSX.Element {
    return(
        <>
            Kartica
            <hr />
            <Link to={"/volunteers/volunteer/" + data}>Link</Link>
        </>
    );
}

export default VolunteerCard;