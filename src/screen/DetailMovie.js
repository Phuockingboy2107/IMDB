import { useEffect, useState } from "react";
import {  Col, Row ,Table } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import TemplateHome from "../Template/TemPlateHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/DetailMovie.css"
import Iframe from 'react-iframe'
import CreateCm from "../components/CreateCm";
import ListCm from "../components/ListCm";
import Display from "../components/Display";
const DetailMovie = () => {
    const { mid } = useParams();
  
    const [p, setMovie] = useState({})

    useEffect(() => {
        fetch('http://localhost:9999/movie/' + mid)
            .then(resp => resp.json())
            .then(data => {
                setMovie(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])


    return (
        <TemplateHome>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={p.banner} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={p.thumbnail} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{p.title}</div>
                            <div className="movie__tagline">Cast: {p.cast}</div>
                            <div className="movie__rating">
                                {p.vote_average}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                                </svg>
                                <span className="movie__voteCount">Vote:{p.vote}</span>
                            </div>
                            <div className="movie__runtime">Time:{p.time}p</div>
                            <div className="movie__releaseDate">Release date:{p.date}</div>
                            <div className="movie__genres">
                                {p.genres}
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{p.overview}</div>
                        </div>

                    </div>
                </div>
                <div>
                    <h3 className="trailer_tai">Trailer</h3>
                    <div className="trailer">
                        <Iframe url={p.trailer}
                            width="860" height="415" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    </div>
                </div>
                <br></br>
              
             
            </div>
            
            <ListCm/>
            <Display/>
        </TemplateHome>
    )

}
export default DetailMovie;