import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/Header.css";
import "./style/Card.css";
import "./style/MovieList.css";
import "./style/Banner.css";
import "./style/Home.css";
import "./style/ErrorPage.css";
import Home from "./screen/Home";
import UpComing from "./screen/UpComing";
import DetailMovie from "./screen/DetailMovie";
import ManagerUpcommingMovie from "./screen/ManagerUpcommingMovie";
import Login from "./components/Login";
import Popular from "./screen/Popular";
import ManagerDetailMovie from "./screen/ManagerMovieDetail";
import CreateMovie from "./screen/CreateMovie";
import ErrorPage from "./components/404Page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/upcoming" element={<UpComing />} />
                <Route path="/movie/detail/:mid" element={<DetailMovie />} />
                <Route path="/movie/popular" element={<Popular />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/manager/movie"
                    element={<ManagerUpcommingMovie />}
                />
                <Route
                    path="/manager/detail/:mid"
                    element={<ManagerDetailMovie />}
                />
                <Route path="/manager/add" element={<CreateMovie />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
