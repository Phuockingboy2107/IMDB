import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="bg-secondary text-white text-center">
            <MDBContainer className="p-4">
                <MDBRow>
                    <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Review Film Team 4</h5>

                        <p>Meoww meooo mewoooo meooow</p>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/upcoming" className="text-white">
                                    UpComing
                                </a>
                            </li>
                            <li>
                                <a href="/movie/popular" className="text-white">
                                    Popular
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/NhuAnhMer/"
                                    className="text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2023 Copyright:
                <a className="text-white" href="/">
                    Team4
                </a>
            </div>
        </MDBFooter>
    );
}
