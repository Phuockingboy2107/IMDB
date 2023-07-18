import { Link } from "react-router-dom";

const Card = ({ title, imgURL, body, id }) => {
    return (
        <Link
            to={"/movie/detail/" + id}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div id="card" className="card m-4" style={{ textAlign: "center" }}>
                <img
                    className="card card-img-top"
                    src={imgURL}
                    style={{ width: "190px", height: "250px" }}
                ></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link
                        to={"/movie/detail/" + id}
                        className="btn btn-outline-dark"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default Card;
