import { Link } from "react-router-dom";

function ActivityCard({data}: {data: number}): JSX.Element {
    return(
        <div>
            Aktivnost
            <hr />
            <Link to={"/activities/activity/" + data}>Link na aktivnost</Link>
        </div>
    );
}

export default ActivityCard;