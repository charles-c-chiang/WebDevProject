import Home from "./Home/Home.js"
import Main from "./Main/Main.js"
// import Navi from "./Navi/Navi.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/main" element={<Main/>} />
            </Routes>
            {/* <Navi/> */}
        </Router>
    );
}