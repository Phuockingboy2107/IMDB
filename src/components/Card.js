import { Link } from "react-router-dom";

const Card = ({ title, imgURL, body, id }) => {
    return (
        <div className="card m-4">
            <img className="card card-img-top" src={imgURL}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <Link
                    to={"/movie/detail/" + id}
                    className="btn btn-outline-dark"
                >
                    Trailer
                </Link>
            </div>
        </div>
    );
};

export default Card;
