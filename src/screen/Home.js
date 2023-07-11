import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import PopularMovieList from "../components/PopularMovie";
import UpComingMovieList from "../components/UpComingMovieList";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";

const Home = () => {
    return (
        <div className="poster">
            <DefaultTemplate>
                <Banner />
                <Row>
                    <Col className="movie-title-popular m-2">
                        <h2 className="popular-movie">Popular movie</h2>
                    </Col>
                </Row>
                <PopularMovieList />
            </DefaultTemplate>
        </div>
    );
};

export default Home;
