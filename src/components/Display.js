import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useParams } from "react-router-dom";
const Display = () => {
    const [product, setComment] = useState([]);
    const { mid } = useParams();

    //Call API
    useEffect(() => {
        fetch("http://localhost:9999/Vote")
            .then((resp) => resp.json())
            .then((data) => {
                setComment(data);
            });
    }, []);
  


    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Table>
                            
                            <tbody>
                                {product.map((p) => (
                                    <tr key={p.id}>
                                        <Card.Footer style={{color:"yellow"}}>{p.comments}</Card.Footer>
                                   
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Display;