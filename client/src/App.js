import react from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/Login.js";
import {MainPage} from "./components/MainPage.js";
import {Register} from "./components/Register";
import {Listing} from "./components/Listing";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<Listing/>}/>
            </Routes>
        </>
    );
}

export default App;