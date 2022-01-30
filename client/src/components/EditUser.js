import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export const EditUser = (props) => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()

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

    const editUser = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/users/' + props.username, {
            name: name,
            username: username,
            password: password,
            status: status,
            role: role,
        })
            .then((res) => {
                const message = res.data;
                console.log(message);
                navigate('/admin/users')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Edit korisnika</h1>
            <form>
                <div className="form-label">
                    <label >Name</label>
                </div>
                <input type="text" onChange={nameChangeHandler} placeholder="Unesi name" className="form-input-modal" value={name} />
                <br ></br>
                <div className="form-label">
                    <label >Username</label>
                </div>
                <input type="text" onChange={usernameChangeHandler} placeholder="Unesi username" className="form-input-modal" value={username} />
                <br ></br>
                <div className="form-label">
                    <label >Password</label>
                </div>
                <input type="text" onChange={passwordChangeHandler} placeholder="Unesi password" className="form-input-modal" value={password} />
                <br ></br>
                <div className="form-label">
                    <label >Status</label>
                </div>
                <input type="text" onChange={statusChangeHandler} placeholder="Unesi status" className="form-input-modal" value={status} />
                <br ></br>
                <div className="form-label">
                    <label >Role</label>
                </div>
                <input type="text" onChange={roleChangeHandler} placeholder="Unesi role" className="form-input-modal" value={role} />
                <br ></br>


                <button onClick={editUser} className="btn btn-success form-button  modal-button" >Zavrsi</button>
                <button onClick={props.onClose} className="btn  btn-danger form-button  modal-button close">Zatvori </button>
            </form>
        </>
    );
}