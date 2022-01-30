import { useState } from "react";
import axios from "axios";

export const AddUser = (props) => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const statusChangeHandler = (event) => {
        setStatus(event.target.value);
    };

    const roleChangeHandler = (event) => {
        setRole(event.target.value);
    };

    const addUser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users', {
            name: name,
            username: username,
            password: password,
            status: status,
            role: role
        })
            .then((res) => {
                const message = res.data;
                console.log(message);
                props.onClose();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="add--new">
                <h1>Kreiraj novog korisnika</h1>
                <div className="flex-centers">
                    <form>
                        <div className="form-label">
                            <label >Ime</label>
                        </div>
                        <input type="text" onChange={nameChangeHandler} placeholder="Name: " className="form-input-modal" value={name} />
                        <br ></br>
                        <div className="form-label">
                            <label >Username</label>
                        </div>
                        <input type="text" onChange={usernameChangeHandler} placeholder="Username: " className="form-input-modal" value={username} />
                        <br ></br>
                        <div className="form-label">
                            <label >Password</label>
                        </div>
                        <input type="text" onChange={passwordChangeHandler} placeholder="Password: " className="form-input-modal" value={password} />
                        <br ></br>
                        <div className="form-label">
                            <label >Role</label>
                        </div>
                        <input type="text" onChange={roleChangeHandler} placeholder="Role: " className="form-input-modal" value={role} />
                        <br ></br>
                        <div className="form-label">
                            <label >Status</label>
                        </div>
                        <input type="text" onChange={statusChangeHandler} placeholder="Status: " className="form-input-modal" value={status} />
                        <br ></br>

                        <div className="add-buttons">
                            <button onClick={addUser} className="btn btn-success form-button  modal-button" >Kreiraj</button>
                            <button onClick={props.onClose} className="btn  btn-danger form-button  modal-button close">Zatvori </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}