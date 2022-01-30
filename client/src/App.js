import react from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/Login.js";
import {MainPage} from "./components/MainPage.js";
import {Register} from "./components/Register";
import {Listing} from "./components/Listing";
import {UserListing} from "./components/UserListing";
import {AdminPanel} from "./components/AdminPanel";
import {PostDetails} from "./components/PostDetails";
import {UserDetails} from "./components/UserDetails";
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
                <Route path="/postovi" element={<Listing/>}/>
                <Route path="/guest" element={<GuestListing/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
                <Route path="/admin/users" element={<UserListing/>}/>
                <Route path="/admin/users/:username" element={<UserDetails/>}/>
                <Route path="/guest/:postTitle" element={<GuestPostDetails/>}/>
                <Route exact path="/posts/:postTitle" element={<PostDetails/>}></Route>
            </Routes>
        </>
    );
}

export default App;