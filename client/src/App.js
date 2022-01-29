import react from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import {MainPage} from "./components/MainPage.js";
import {Register} from "./components/Register";


function App() {
    return (
        <>
            <Routes>
                
                <Route path="/" element={<MainPage/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    );
}

export default App;