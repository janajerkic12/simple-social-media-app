import react from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/Login.js";
import {MainPage} from "./components/MainPage.js";
import {Register} from "./components/Register";
import {Listing} from "./components/Listing";
import {PostDetails} from "./components/PostDetails";
import {GuestListing} from "./components/guest/GuestListing";
import {GuestPostDetails} from "./components/guest/GuestPostDetails";


function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<Listing/>}/>
                <Route path="/guest" element={<GuestListing/>}/>
                <Route path="/guest/:articleTitle" element={<GuestPostDetails/>}/>
                <Route exact path="/posts/:articleTitle" element={<PostDetails/>}></Route>
            </Routes>
        </>
    );
}

export default App;