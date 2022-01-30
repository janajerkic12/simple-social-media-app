import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { User } from "./User"
import Modal from 'react-modal';
import { AddUser } from "./AddUser"
import Button from 'react-bootstrap/Button'

export const UserListing = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/users").then(({ data }) => setUsers(data)).catch(error => console.log(error)).finally(() => { setLoading(false) })
    }, [])

    const usersItems = users.map((user, i) => {
        return (
            <User user={user} key={i}>
                <Button>Delete</Button>
            </User>
        )
    });
    return (
        <>
            {loading ? <h1>Učitavanje...</h1> : <><p className="list-titles">Korisnici</p><div className='item-menu'>{usersItems}</div></>}
            <Modal isOpen={modalIsOpen} onRequestClose={(() => { setModalIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "750px", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", overflowY: "hidden" } }} >
                <AddUser onClose={(() => { setModalIsOpen(false) })}></AddUser>
            </Modal>
            <Button onClick={(() => { setModalIsOpen(true) })} className="home-btn add">Dodaj korisnika</Button>
        </>
    )
}