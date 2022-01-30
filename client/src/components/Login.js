import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const login = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            setErrorMessage("Please fill in all fields")
        } else {
            axios.get('http://localhost:8080/users/' + username)
                .then((res) => {
                    const message = res.data;
                    console.log(message);

                    if (message.length === 0) {
                        setErrorMessage("Username not found")
                    }
                    else if (password === message[0].password) {
                        navigate('/products')
                    } else {
                        setErrorMessage("Incorrect password")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <>
            <div className="background" >
                <img src={"Login.svg"} className="illustration-register" alt=""></img>
                <h1 className="register-title">Login</h1>
                <h5 className="register-under">Please enter valid information</h5>
                <form className="register-form">
                    <input type="text" onChange={usernameChangeHandler} className="form-input1" placeholder="Username" value={username} />
                    <br></br>
                    <input type="password" onChange={passwordChangeHandler} className="form-input2" placeholder="Password" value={password} />
                    <br></br>
                    <p className="errorMessage">{errorMessage}</p>
                    <button onClick={login} className="btn btn-success form-button register-button" >Login</button>

                    <Link to='/register'><Button className="btn btn-primary btn-lg home-btn">Registracija</Button></Link>
                </form >
            </div>
        </>
    )
}