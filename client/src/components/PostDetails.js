import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { EditPost } from "./EditPost";
import { CommentPost } from "./CommentPost";
import ModalOne from 'react-modal';
import ModalTwo from 'react-modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

export const PostDetails = () => {
    const params = useParams();
    const [item, setItem] = useState([]);
    const [modalOneIsOpen, setModalOneIsOpen] = useState(false);
    const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
    const navigate = useNavigate()
    const [comment, setComment] = useState("");

    const commentChangeHandler = (event) => {
        setComment(event.target.value);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/posts/" + params.articleTitle).then(({ data }) => setItem(data)).catch(error => console.log(error))
    }, [params.articleTitle])

    const deleteItem = () => {
        axios.delete('http://localhost:5000/posts/' + params.articleTitle)
            .then((res) => {
                const message = res.data;
                console.log(message);
                navigate('/posts')

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
                    <Button onClick={(() => { setModalTwoIsOpen(true) })} className="home-btn">Uredi post</Button>
                    <Button onClick={(() => { setModalOneIsOpen(true) })} className="home-btn">Komentarisi post</Button>
                    <Button onClick={deleteItem} className="home-btn delete-btn">Obriši post</Button>
                </div>

            </div>


            <ModalOne isOpen={modalOneIsOpen} onRequestClose={(() => { setModalOneIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "700px", height: "fit-content", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", opacitiy: 1, overflowY: "hidden" } }}>
                <CommentPost onClose={(() => { setModalOneIsOpen(false) })} title={item.title} imageURL={item.imageURL} content={item.content}></CommentPost>
            </ModalOne>

            <ModalTwo isOpen={modalTwoIsOpen} onRequestClose={(() => { setModalTwoIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "700px", height: "fit-content", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", opacitiy: 1, overflowY: "hidden" } }}>
                <EditPost onClose={(() => { setModalTwoIsOpen(false) })} title={item.title} imageURL={item.imageURL} content={item.content}></EditPost>
            </ModalTwo>
        </>
    )
}