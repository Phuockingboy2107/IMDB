import { useEffect, useState } from "react";
import AdminTemplate from "../Template/AdminTemplate";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const CreateMovie = () => {
    const [id, setId] = useState([]);
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState("");
    const [cast, setCast] = useState([]);
    const [genreId, setGenreId] = useState([]);
    const [extract, setExtract] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [banner, setBanner] = useState("");
    const [vote, setVote] = useState(0.0);
    const [time, setTime] = useState(0);
    const [trailer, setTrailer] = useState("");

    const [genrers, setGenrers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:9999/genres")
            .then((res) => res.json())
            .then((resp) => setGenrers(resp));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {
            title: title,
            date: date,
            cast: cast,
            genreId: genreId,
            extract: extract,
            thumbnail: thumbnail,
            banner: banner,
            vote: vote,
            time: time,
            trailer: trailer,
        };
        fetch("http://localhost:9999/movie", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(movie),
        })
            .then((res) => {
                alert("Save successfully!");
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
                                            Add new Movie
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
                                                type="text"
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
                                                value={genreId}
                                                onChange={(e) =>
                                                    setGenreId(
                                                        parseInt(e.target.value)
                                                    )
                                                }
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
                                                value={date}
                                                onChange={(e) =>
                                                    setDate(e.target.value)
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
                                                    setTime(
                                                        parseInt(e.target.value)
                                                    )
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
                                                type="url"
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
                                            <Button type="submit">Add</Button>
                                            <Link
                                                to={"/manager/upcomming"}
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

export default CreateMovie;
