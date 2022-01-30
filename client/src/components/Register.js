
import { useState } from "react";
import axios from "axios";


export const Register = () => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const addUser = (e) => {
        e.preventDefault()
        if (username === '' || password === '' || name === '' ) {
            setErrorMessage('Sva polja su obavezna za unos!')
        } else {
            axios.post('http://localhost:8080/users', {
                name: name,
                username: username,
                password: password,
            }).then((res) => {
                const message = res.data;
                console.log(message);
                if (message === 'Korisničko ime je već u upotrebi') {
                    setErrorMessage(message)
                } else {
                    setErrorMessage('Ragistracija uspjela. Molimo prijavite se.')
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <>
            <div className="background background-register" >
                <p className="errorMessage">{errorMessage}</p>
                <h1 className="register-title">Registracija</h1>
                <h5 className="register-under">Unesite validne podatke</h5>
                <form className="register-form">
                    <input type="text" onChange={nameChangeHandler} className="form-input1" placeholder="Ime: " value={name} />
                    <br></br>
                    <input type="text" onChange={usernameChangeHandler} className="form-input1" placeholder="Korisničko ime:" value={username} />
                    <br></br>
                    <input type="password" onChange={passwordChangeHandler} className="form-input2" placeholder="Password: " value={password} />
                    <br></br>
                    <button onClick={addUser} className="btn btn-success form-button register-button" >Register</button>
                </form >
            </div>
        </>
    )
}

