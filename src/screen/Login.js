import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import {Row} from "react-bootstrap"
import TemplateHome from "../Template/TemPlateHome";
import DefaultTemplate from "../Template/DefaultTemplate";
const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
          
            fetch("http://localhost:9999/users?account=" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter Valid username');
                } else {
                    
                    
                    if (resp[0].password === password) {
                        
                        toast.success('Success');
                        
                        sessionStorage.setItem('user',(resp[0].id));

                        usenavigate('/')
                    }else{
                        toast.error('Please Enter Valid Credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

   
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <DefaultTemplate>
            <div className="row">
                <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>
                                        User Name{" "}
                                        <span className="errmsg" style={{ color: "red" }}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => usernameupdate(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Password{" "}
                                        <span className="errmsg" style={{ color: "red" }}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => passwordupdate(e.target.value)}
                                        className="form-control"
                                    ></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>{" "}
                                |
                                <Link className="btn btn-success" to={"/register"}>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultTemplate>
    );
}

export default Login;