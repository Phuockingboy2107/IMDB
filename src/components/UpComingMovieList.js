import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UpComingMovieList = () => {
    const [upcomingmovide, setUpcomming] = useState([]);

    function filterUpcomingMovies(movies) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate comparison

        return movies.filter((movie) => {
            const movieDate = new Date(movie.date);
            console.log(movieDate);
            return movieDate.getTime() > today.getTime();
        });
    }

    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((movies) => {
                const upcomingMovie = filterUpcomingMovies(movies);
                setUpcomming(upcomingMovie);
            });
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
            {upcomingmovide.map((m) => (
                <Card title={m.title} imgURL={m.thumbnail} id={m.id} />
            ))}
        </Slider>
    );
};

export default UpComingMovieList;
