import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate("");

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const login = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            setErrorMessage('Popunite sva polja!')
        } else {
            axios.get('http://localhost:5000/users/' + username,).then((res) => {
                const message = res.data;
                console.log(message);
                if (message.length === 0) {
                    setErrorMessage('Nepostojeci podaci')
                } else if(password == message[0].password) {
                    navigate('/posts')
                } else {
                    setErrorMessage("netacan unos");
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <>

            <div className="background login-panel" >
                <p className="errorMessage">{errorMessage}</p>
                <h1 className="register-title">Prijava</h1>
                <h5 className="register-under">Unesite validne podatke</h5>
                <form className="register-form">
                    <input type="text" onChange={usernameChangeHandler} className="form-input1" placeholder="Korisničko ime" value={username} />
                    <br></br>
                    <input type="password" onChange={passwordChangeHandler} className="form-input2" placeholder="Password" value={password} />
                    <br></br>
                    <button onClick={login} className="btn btn-success form-button register-button" >Prijavi se</button>
                    <Link to='/register'><Button className="btn btn-primary btn-lg home-btn logpage-btn-reg">Registracija</Button></Link>
                </form >
            </div>
        </>
    )
}