import { Link, useNavigate, useParams } from "react-router-dom";
import AdminTemplate from "../Template/AdminTemplate";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Dropdown } from "react-bootstrap";

const ManagerDetailMovie = () => {
    const { mid } = useParams();
    const [m, setMovie] = useState({});
    const [genrers, setGenrers] = useState([]);

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState({});
    const [cast, setCast] = useState([]);
    const [genres, setGenres] = useState(1);
    const [thumbnail, setThumbnail] = useState("");
    const [extract, setExtract] = useState("");
    const [time, setTime] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [vote, setVote] = useState(0.0);
    const [banner, setBanner] = useState("");

    const navigate = useNavigate();

    //GetDataFromMovie
    useEffect(() => {
        fetch("http://localhost:9999/movie/" + mid)
            .then((res) => res.json())
            .then((resp) => {
                setId(resp.id);
                setTitle(resp.title);
                setYear(resp.date);
                setCast(resp.cast);
                setGenres(resp.genreId);
                setThumbnail(resp.thumbnail);
                setExtract(resp.extract);
                setTime(resp.time);
                setTrailer(resp.trailer);
                setVote(resp.vote);
                setBanner(resp.banner);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9999/genres")
            .then((res) => res.json())
            .then((resp) => setGenrers(resp));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {
            id: id,
            title: title,
            date: year,
            cast: cast,
            genreId: genres,
            extract: extract,
            thumbnail: thumbnail,
            banner: banner,
            vote: vote,
            time: time,
            trailer: trailer,
        };
        console.log(movie);
        fetch("http://localhost:9999/movie/" + mid, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        })
            .then((res) => res.json())
            .then((resp) => {
                alert("edit movie successfully");
                navigate("/manager/movie");
            })
            .catch((err) => console.log(err));
    };
    return (
        <AdminTemplate>
            <Container>
                <Row className="my-4">
                    <Col className="p-4" style={{ border: "1px solid red" }}>
                        <Row>
                            <Col className="offset-2 col-md-8">
                                <Row>
                                    <Col style={{ textAlign: "center" }}>
                                        <h3 style={{ color: "white" }}>
                                            Edit Movie
                                        </h3>
                                    </Col>
                                </Row>
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Row className="my-4">
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Id
                                            </label>
                                            <Form.Control value={id} disabled />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Name
                                            </label>
                                            <Form.Control
                                                type="text"
                                                value={title}
                                                onChange={(e) =>
                                                    setTitle(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Cast
                                            </label>
                                            <Form.Control
                                                value={cast}
                                                onChange={(e) =>
                                                    setCast(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Gender
                                            </label>
                                            <Form.Select
                                                className="form-control"
                                                onChange={(e) =>
                                                    setGenres(
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                                value={genres}
                                            >
                                                {genrers.map((g) => (
                                                    <option
                                                        key={g.id}
                                                        value={g.id}
                                                    >
                                                        {g.name}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Thumbnail
                                            </label>
                                            <Form.Control
                                                type="url"
                                                value={thumbnail}
                                                onChange={(e) =>
                                                    setThumbnail(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Banner Img
                                            </label>
                                            <Form.Control
                                                type="url"
                                                value={banner}
                                                onChange={(e) =>
                                                    setBanner(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Date
                                            </label>
                                            <Form.Control
                                                type="date"
                                                value={year}
                                                onChange={(e) =>
                                                    setYear(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Duration
                                            </label>
                                            <Form.Control
                                                type="number"
                                                value={time}
                                                onChange={(e) =>
                                                    setTime(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                IMDB Vote
                                            </label>
                                            <Form.Control
                                                type="number"
                                                value={vote}
                                                onChange={(e) =>
                                                    setVote(
                                                        parseFloat(
                                                            e.target.value
                                                        )
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <label style={{ color: "white" }}>
                                                Trailer
                                            </label>
                                            <Form.Control
                                                value={trailer}
                                                onChange={(e) =>
                                                    setTrailer(e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-12">
                                            <label style={{ color: "white" }}>
                                                Overview
                                            </label>
                                            <Form.Control
                                                value={extract}
                                                onChange={(e) =>
                                                    setExtract(e.target.value)
                                                }
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="col-md-12 m-4"
                                            style={{ textAlign: "center" }}
                                        >
                                            <Button type="submit">
                                                Update
                                            </Button>
                                            <Link
                                                to={"/manager/movie"}
                                                className="btn btn-primary mx-4"
                                            >
                                                Back to list
                                            </Link>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AdminTemplate>
    );
};

export default ManagerDetailMovie;
