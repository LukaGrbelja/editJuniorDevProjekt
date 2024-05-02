import { Link } from "react-router-dom";

function Card({ children }: any) {
    return (
        <div className="mainContent">
            {children}
        </div>
    );
}

Card.Row = function ({ children }: any) {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    );
}

Card.Element = function ({ children }: any) {
    return (
        <div style={{ paddingRight: "10%", paddingLeft: "2%" ,borderRight: "1px white solid", display: "inline-block" }}>
            {children}
        </div>
    );
}

Card.Link = function ({linkUrl}: {linkUrl: string}) {
    return (
        <>
            <hr />
            <Link to={linkUrl}>Link</Link>
        </>
    );
}

export default Card;