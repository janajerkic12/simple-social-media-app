import './styles/Registration.css'
import { useState } from "react";
import axios from "axios";


export const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const addUser = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            setErrorMessage('Please fill in all fields!')
        } else {
            axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
            }).then((res) => {
                const message = res.data;
                console.log(message);
                if (message === 'User with this username already exists') {
                    setErrorMessage(message)
                } else {
                    setErrorMessage('User added successfuly! Please log in.')
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
                <p className="errorMessage">{errorMessage}</p>
                <h1 className="register-title">Register</h1>
                <h5 className="register-under">Please enter valid information</h5>
                <form className="register-form">
                    <input type="text" onChange={usernameChangeHandler} className="form-input1" placeholder="Username" value={username} />
                    <br></br>
                    <input type="password" onChange={passwordChangeHandler} className="form-input2" placeholder="Password" value={password} />
                    <br></br>
                    <button onClick={addUser} className="btn btn-success form-button register-button" >Register</button>
                </form >
            </div>
        </>
    )
}

