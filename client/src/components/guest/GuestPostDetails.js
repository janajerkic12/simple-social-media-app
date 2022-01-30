import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const GuestPostDetails = () => {
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

            </div>


        </>
    )
}