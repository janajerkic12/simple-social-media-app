import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { EditUser } from "./EditUser";
import ModalTwo from 'react-modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

export const UserDetails = () => {
    const params = useParams();
    const [item, setItem] = useState([]);
    const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/users/" + params.username).then(({ data }) => setItem(data)).catch(error => console.log(error))
    }, [params.username])

    const deleteItem = () => {
        axios.delete('http://localhost:5000/users/' + params.username)
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
            {item.length > 0 ? <div>

                <div className="container details-page">
                <div className="card-item">
                    <div className="card-body korisnici-uredi">

                        <h5 className="card-title title-product-detal">{item[0].name}</h5>
                        <p className="product-desc">Username: {item[0].username}</p>
                        <p className="product-desc">Password: {item[0].password}</p>
                        <p className="product-desc">Role: {item[0].role}</p>
                        <p className="product-desc">Status: {item[0].status}</p>
                    </div>
                </div>
                <div className="detail-buttons">
                    <Button onClick={(() => { setModalTwoIsOpen(true) })} className="home-btn">Uredi korisnika</Button>
                    <Button onClick={deleteItem} className="home-btn delete-btn">Obriši post</Button>
                </div>

            </div>

            <ModalTwo isOpen={modalTwoIsOpen} onRequestClose={(() => { setModalTwoIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "700px", height: "fit-content", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", opacitiy: 1, overflowY: "hidden" } }}>
                <EditUser onClose={(() => { setModalTwoIsOpen(false) })} name={item[0].name} username={item[0].username} password={item[0].password} role={item[0].role} status={item[0].status}></EditUser>
            </ModalTwo>
            </div> : null}
            
        </>
    )
}