import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";

const UpComingMovieList = () => {
    const [upcomingmovide, setUpcoming] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/upcomingmovie")
            .then((res) => res.json())
            .then((resp) => setUpcoming(resp.slice(0, 4)));
    }, []);
    return (
        <Row className="movie_list">
            {upcomingmovide.map((u) => (
                <Col className="list_card" md={3}>
                    <Card title={u.title} imgURL={u.thumbnail} />
                </Col>
            ))}
        </Row>
    );
};

export default UpComingMovieList;
