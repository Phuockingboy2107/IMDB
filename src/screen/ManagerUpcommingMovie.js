import { useEffect, useState } from "react";
import AdminTemplate from "../Template/AdminTemplate.js";
import { Row, Col, Table, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
const ManagerUpcommingMovie = () => {
    const [movieList, setMovieList] = useState([]);
    const [genres, setGenres] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    console.log(movieList);
    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) => setMovieList(resp));
    }, []);
    useEffect(() => {
        fetch("http://localhost:9999/genres")
            .then((res) => res.json())
            .then((resp) => setGenres(resp));
    }, []);

    const handleDelete = (id, title) => {
        if (window.confirm("Do you want delete " + title + "!")) {
            fetch("http://localhost:9999/movie/" + id, {
                method: "DELETE",
            }).then(() => {
                alert("Delete Success");
                window.location.reload();
            });
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) =>
                setMovieList(
                    resp.filter((movie) =>
                        movie.title.toLowerCase().includes(search.toLowerCase())
                    )
                )
            );
    };
    //Sort

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((res) => res.json())
            .then((resp) => {
                let sortedMovies = [...resp];
                if (sort === "name") {
                    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
                } else if (sort === "date") {
                    sortedMovies.sort(
                        (a, b) => new Date(b.date) - new Date(a.date)
                    );
                }
                setMovieList(sortedMovies);
            });
    }, [sort]);

    return (
        <AdminTemplate>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h3
                                className="text-light"
                                style={{ textAlign: "center" }}
                            >
                                UpComing Movie List
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form
                                className="form"
                                onSubmit={(e) => handleSearch(e)}
                            >
                                <Container>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter title to search..."
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    ></input>
                                </Container>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <Form.Select
                                            className="form-control m-2"
                                            onChange={handleSortChange}
                                            style={{ width: "150px" }}
                                        >
                                            <option selected value="">
                                                Sort by
                                            </option>
                                            <option value="name">
                                                Sort by name
                                            </option>
                                            <option value="date">
                                                Sort by date
                                            </option>
                                        </Form.Select>
                                    </Col>
                                    <Col style={{ textAlign: "right" }}>
                                        <Link
                                            className="btn btn-primary m-2"
                                            to={"/manager/add"}
                                        >
                                            Add new movie
                                        </Link>
                                    </Col>
                                </Row>
                                <Table className="bg-light">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Banner</th>
                                            <th>Date</th>
                                            <th>Genres</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movieList.map((m) => (
                                            <tr key={m.id}>
                                                <td>{m.id}</td>
                                                <td>{m.title}</td>
                                                <td>
                                                    <img
                                                        src={m.thumbnail}
                                                        style={{
                                                            width: "100px",
                                                        }}
                                                    ></img>
                                                </td>
                                                <td>{m.date}</td>
                                                <td>
                                                    {genres.map((g) =>
                                                        g.id === m.genreId
                                                            ? g.name
                                                            : ""
                                                    )}
                                                </td>
                                                <td>
                                                    <Link
                                                        to={
                                                            "/manager/detail/" +
                                                            m.id
                                                        }
                                                        className="mx-3"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        to={"#"}
                                                        onClick={() =>
                                                            handleDelete(
                                                                m.id,
                                                                m.title
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AdminTemplate>
    );
};

export default ManagerUpcommingMovie;
