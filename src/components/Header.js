import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
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
                    {/* <li className="nav-item  mx-3">
                        <form className="form-inline mr-5 my-lg-0 ">
                            <input
                                className="form-control d-none d-md-block  ml-sm-2"
                                type="search"
                                placeholder="Search"
                            />
                        </form>
                    </li> */}
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
