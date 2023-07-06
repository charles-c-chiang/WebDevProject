import Home from "./Home/Home.js"
import Main from "./Main/Main.js"
import AuthModule from "./Auth/Auth.js"
import AuthRegister from "./Auth/AuthRegister.js"
import AuthLogin from "./Auth/AuthLogin.js"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function Components() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/main" element={<Main/>} />
                <Route path = "/auth" element={<AuthModule />} />
                <Route path = "/auth/register" element={<AuthRegister />} />
                <Route path = "/auth/login" element={<AuthLogin />} />
                <Route path = "*" element={<Navigate to ="/auth" replace />} />
            </Routes>
            {/* <Navi/> */}
        </Router>
    );
}