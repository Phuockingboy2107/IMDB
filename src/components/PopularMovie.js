import { useEffect, useState } from "react";
import Card from "./Card";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import DefaultTemplate from "../Template/DefaultTemplate";
const PopularMovieList = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) => setMovie(resp));
    }, []);
    return (
        <Row className="movie_list">
            {movie.map((m) => (
                <Col className="list_card" md={3}>
                    <Card title={m.title} imgURL={m.thumbnail} id={m.id} />
                </Col>
            ))}
        </Row>
    );
};

export default PopularMovieList;
