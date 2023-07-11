import { useParams } from "react-router-dom";

const DetailMovie = () => {
    const { mid } = useParams();
    console.log(mid);
    return (
        <div>
            <h1 style={{ color: "white" }}>Detail Movie :{mid}</h1>
        </div>
    );
};

export default DetailMovie;
