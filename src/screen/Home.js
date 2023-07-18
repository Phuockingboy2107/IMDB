import { Card, Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import PopularMovieList from "../components/PopularMovie";
import Banner from "../components/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";
import UpComingMovieList from "../components/UpComingMovieList";

const Home = () => {
    return (
        <div className="poster">
            <DefaultTemplate>
                <Banner />
                <Container>
                    <Row>
                        <Col className="movie-title-popular m-2">
                            <h2 className="popular-movie">UpComing Movie</h2>
                        </Col>
                    </Row>
                    <UpComingMovieList />
                    <Row>
                        <Col className="movie-title-popular m-2">
                            <h2 className="popular-movie">What popular</h2>
                        </Col>
                    </Row>
                    <PopularMovieList />
                </Container>
            </DefaultTemplate>
        </div>
    );
};

export default Home;
