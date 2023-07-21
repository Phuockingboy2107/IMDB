import {  useParams } from "react-router-dom";
import "../style/Cm.css";
import CreateCm from "./CreateCm";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
const ListCm = () => {
  const [id, setId] = useState(0);
  const [comments, setComments] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem("token")?true:false;
  const { mid } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      comments
    };
    if (comments.length === 0) {
      alert("Please fill all fields");
    } else {
      fetch("http://localhost:9999/Vote", {
        method: "POST",
        headers: { "Content-Type": "Application/Json", charset: "utf-8" },
        body: JSON.stringify(product),
      }).then(() => {
       
        window.location.reload();
      });
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} disabled={!isLoggedIn}>
      <Form.Group className="col-md-6">
        <label>
          <h2 style={{ color: "aquamarine" }}>Your Comment</h2>
        </label>
        <Form.Control 
        
value={comments}
 onChange={(e) => setComments(e.target.value)}
    />
        
      </Form.Group>
    </Form>

  );
};


export default ListCm
