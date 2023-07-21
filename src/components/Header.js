import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Profile from "../screen/Profile";
const Header = () => {
    const history = useNavigate();
    const id = sessionStorage.getItem("user");
    const handleLogOut = () => {
        sessionStorage.removeItem("user");
        history("/");
    };

    return (
        <Navbar className="navbar py-3">
            <div className="logo">
                <a className="navbar-brand logo px-2 font-weight-bold" href="/">
                    IMDb
                </a>
            </div>
            <Row
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-3">
                        {id ? (
                            <Link
                                className="nav-link text-light font-weight-bold"
                                onClick={handleLogOut}
                            >
                                Logout
                            </Link>
                        ) : (
                            <Link
                                className="nav-link text-light font-weight-bold"
                                to={"/login"}
                            >
                                Login
                            </Link>
                        )}
                    </li>
                    <li className="nav-item mx-3">
                        <Link
                            className="nav-link text-light font-weight-bold"
                            to={"/"}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link text-light" to={"/upcoming"}>
                            UpComing
                        </Link>
                    </li>
                    <li className="nav-item  mx-3">
                        <Link
                            className="nav-link text-light"
                            to={"/movie/popular"}
                        >
                            Popular
                        </Link>
                    </li>
                    <li className="nav-item  mx-3">
                        <NavLink
                            className="nav-link text-light"
                            to={"/profile/" + id}
                        >
                            Account
                        </NavLink>
                    </li>
                </ul>
                <Link
                    to={"/manager/movie"}
                    className="nav-link text-light mx-3"
                >
                    Manage movie
                </Link>

                <Link
                    className="nav-link text-light font-weight-bold"
                    to={"/login"}
                >
                    Login
                </Link>
            </Row>
        </Navbar>
    );
};

export default Header;
