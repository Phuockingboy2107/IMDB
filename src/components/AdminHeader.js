import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    return (
        <Navbar style={{ padding: "30px" }}>
            <div className="logo">
                <a className="navbar-brand logo px-2 font-weight-bold" href="/">
                    IMDb
                </a>
            </div>
            <ul className="navbar-nav">
                <li>
                    <Link className="nav-item mx-3" to={"/manager/movie"}>
                        Manage Movie
                    </Link>
                </li>
            </ul>
        </Navbar>
    );
};

export default AdminHeader;
