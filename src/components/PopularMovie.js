import { useEffect, useState } from "react";
import Card from "./Card";
import DetailMovie from "../screen/DetailMovie";
import {  Col, Row } from "react-bootstrap";
const PopularMovieList = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) => setMovie(resp.slice(0, 4)));
    }, []);
    return (
        <Row className="movie_list">
            {movie.map((m) => (
                <Col className="list_card" xs={6} md={3}>

                    <Card title={m.title} imgURL={m.thumbnail} id={m.id} />
                    
                </Col>
            ))}
        </Row>
    );
};

export default PopularMovieList;
