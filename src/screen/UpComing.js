import { Col, Row } from "react-bootstrap";
import UpComingMovieList from "../components/UpComingMovieList";
import DefaultTemplate from "../Template/DefaultTemplate";

const UpComing = () => {
    return (
        <DefaultTemplate>
            <div className="poster">
                <Row>
                    <Col className="movie-title-popular m-2">
                        <h2
                            className="upcoming-title"
                            style={{ color: "yellow" }}
                        >
                            UpComing
                        </h2>
                    </Col>
                </Row>
                <UpComingMovieList />
            </div>
        </DefaultTemplate>
    );
};

export default UpComing;
