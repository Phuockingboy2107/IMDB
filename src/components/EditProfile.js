import { Col, Modal, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { User } from "../hook/User";

export default function EditProfile() {
    const { profileId } = useParams();
    const [data, setData] = useState();
    const [user, setUser] = User();

    useEffect(() => {
        fetch('http://localhost:9999/users/'+profileId)
            .then((x) => x.json())
            .then((x) => setData(x));
    }, [profileId]);

    const handleUpdate = () => {
        if (user?.id === profileId || user?.role >= 1) {
            if (!data?.name || !data?.gmail) {
                alert("Please fill in all fields!");
                return;
            }

            fetch('http://localhost:9999/users/'+profileId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((x) => {
                    if (user.id === profileId) setUser({ ...user, ...data });
                    alert("Edit profile successfully!");
                })
                .catch((err) => toast("Edit profile failed!"));
        } else {
            alert("You don't have any changr profile!");
        }
    };

    return (
        <div className="modal show" style={{ display: "block", position: "initial" }}>
            <Modal.Dialog>
                <Modal.Header style={{ background: "#eee" }}>
                    <Modal.Title>Profile Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row>
                           
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Account</Form.Label>
                                    <Form.Control value={data?.account ?? "unknown"} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupFullName">
                                    <Form.Label>
                                        Fullname
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        required
                                        value={data?.name}
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                    />
                                    <p style={{ color: "red" }}>{data?.name ? "" : "Please input full name"}</p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>
                                        Email
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        required
                                        value={data?.gmail}
                                        onChange={(e) => setData({ ...data, gmail: e.target.value })}
                                    />
                                    <p style={{ color: "red" }}>
                                        {data?.gmail?.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                                            ? ""
                                            : "Please input valid email"}
                                    </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupPhone">
                                    <Form.Label>
                                        Phone
                                    </Form.Label>
                                    <Form.Control
                                        type="phone"
                                        value={data?.phoneNumber}
                                        onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupCountry">
                                    <Form.Label>
                                        Date of Birth
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        required
                                        value={data?.dob}
                                        onChange={(e) => setData({ ...data, dob: e.target.value })}
                                    />
                                    <p style={{ color: "red" }}>{data?.dob ? "" : "Please input date of birth"}</p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupPhone">
                                    <Form.Label>
                                        Gender
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Select
                                        class="sel"
                                        required
                                        value={data?.gender}
                                        onChange={(e) => setData({ ...data, gender: parseInt(e.target.value) })}
                                    >
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupCountry">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={data?.city}
                                        onChange={(e) => setData({ ...data, city: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer
                    style={{
                        background: "#eee",
                        justifyContent: "flex-start",
                    }}
                >
                    <Button style={{ background: "green" }} variant="secondary" onClick={handleUpdate}>
                        Update Profile
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
