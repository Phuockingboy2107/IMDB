import { useEffect, useState } from "react";
import { Carousel, CarouselItem, Container, Row } from "react-bootstrap";
const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {}, []);
    return (
        <Row className="carousel-banner">
            <Carousel
                className="carousel m-4 d-none d-md-block"
                slide={false}
                nextIcon={false}
                prevIcon={false}
                indicators={false}
            >
                <CarouselItem className="poster-img">
                    <img
                        className="carousel-img"
                        src="https://pyxis.nymag.com/v1/imgs/53e/6c1/51e5614da2ab66e40176764b426c04343a-john-wick-4.jpg"
                    />
                    <Carousel.Caption>
                        <h3>John witch 4</h3>
                        <a>Watch now</a>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="poster-img">
                    <img
                        className="carousel-img"
                        src="https://knightedgemedia.com/wp-content/uploads/2023/05/fast-x-vin-diesel-Fast-12-banner.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Fast X</h3>
                        <a>Watch now</a>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="poster-img">
                    <img
                        className="carousel-img"
                        src="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002732?referenceScheme=HeadOffice&allowPlaceHolder=true"
                    />
                    <Carousel.Caption>
                        <h3>Spideman</h3>
                        <a>Watch now</a>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </Row>
    );
};

export default Banner;
