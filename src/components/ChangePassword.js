import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { User } from "../hook/User";

import { useParams } from "react-router-dom";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [user, setUser] = User()
    const { profileId } = useParams();
    const handleUpdate = () => {
        if(oldPassword !== user.password) return alert("Old password is incorrect!")
        if (!newPassword) {
            alert("Please fill in all fields!");
            return;
        }

        fetch('http://localhost:9999/users/'+profileId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...user, password: newPassword }),
        })
            .then((x) => {
                setUser({ ...user, password: newPassword });
                alert("Change password successfully!");
            })
            .catch((err) => alert("Change password failed!"));
    };

    return (
        <div className="modal show" style={{ display: "block", position: "initial" }}>
            <Modal.Dialog>
                <Modal.Header style={{ background: "#eee" }}>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Old Password</Form.Label>
                    <span style={{ color: "red" }}>*</span>
                    <Form.Control
                        type="password"
                        placeholder="Old password"
                        required
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <Form.Label>New Password</Form.Label>
                    <span style={{ color: "red" }}>*</span>
                    <Form.Control
                        type="password"
                        required
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer
                    style={{
                        background: "#eee",
                        justifyContent: "flex-start",
                    }}
                >
                    <Button style={{ background: "green" }} variant="secondary" onClick={handleUpdate}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default ChangePassword;
