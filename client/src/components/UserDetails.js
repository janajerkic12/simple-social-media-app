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
            <div className="container details-page">
                <div className="card-item">
                    <div className="card-body">
                        <div className="row detail-title">
                            <div className="col-lg-7 col-md-7 col-sm-6">                        
                                <h3 className="card-title title-product-detal">{item.title}</h3>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center"><img src={item.imageURL} className="img-responsive" alt="" /></div>
                            </div>
                            
                        </div>
                        <p className="product-desc">{item.content}</p>
                    </div>
                </div>
                <div className="detail-buttons">
                    <Button onClick={(() => { setModalTwoIsOpen(true) })} className="home-btn">Uredi korisnika</Button>
                    <Button onClick={deleteItem} className="home-btn delete-btn">Obriši post</Button>
                </div>

            </div>

            <ModalTwo isOpen={modalTwoIsOpen} onRequestClose={(() => { setModalTwoIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "700px", height: "fit-content", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", opacitiy: 1, overflowY: "hidden" } }}>
                <EditUser onClose={(() => { setModalTwoIsOpen(false) })} name={item.name} username={item.username} password={item.password} role={item.role} status={item.status}></EditUser>
            </ModalTwo>
        </>
    )
}