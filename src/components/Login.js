import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Row, Col } from "react-bootstrap";

const Login = () => {
    const [userName, setUseName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:9999/user?username=" + userName)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.warn("Invalid UserName");
                    } else {
                        if (resp[0].password === password) {
                            toast.success("Login Success!");
                            sessionStorage.setItem("username", userName);
                            sessionStorage.setItem("role", resp[0].role);
                            sessionStorage.setItem("city", resp[0].country);
                            sessionStorage.setItem("name", resp[0].name);
                            navigate("/");
                        } else {
                            toast.warn("Invalid Password");
                        }
                    }
                })
                .catch((err) => toast.warn(err.message));
        }
    };
    const validate = () => {
        let result = true;
        if (userName === null || userName === "") {
            result = false;
            toast.warn("Please enter User Name");
        }
        if (password === null || password === "") {
            result = false;
            toast.warn("Please enter Password");
        }

        return result;
    };
    return (
        <Row className="offset-lg-2 col-lg-8">
            <Col>
                <form onSubmit={handleLogin}>
                    <div className="card-login bg-light my-4">
                        <div className="card-header">
                            <h1>
                                <strong>Login</strong>
                            </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>User Name</label>

                                    <input
                                        value={userName}
                                        onChange={(e) =>
                                            setUseName(e.target.value)
                                        }
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Password</label>
                                    <span className="errmsg">*</span>
                                    <input
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="form-control"
                                        type="password"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-dark">Login</button>
                            <Link className="btn btn-success" to={"/register"}>
                                Register
                            </Link>
                        </div>
                    </div>
                </form>
            </Col>
        </Row>
    );
};

export default Login;
