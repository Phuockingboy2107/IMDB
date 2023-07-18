import { useEffect, useState } from "react";
import Card from "./Card";
import DetailMovie from "../screen/DetailMovie";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularMovieList = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) => setMovie(resp.filter((movie) => movie.vote >= 7)));
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {movie.map((m) => (
                <Card title={m.title} imgURL={m.thumbnail} id={m.id} />
            ))}
        </Slider>
        // <Row className="movie_list">
        //     {movie.map((m) => (
        //         <Col className="list_card" xs={6} md={3}>
        //             <Card title={m.title} imgURL={m.thumbnail} id={m.id} />
        //         </Col>
        //     ))}
        // </Row>
    );
};

export default PopularMovieList;
