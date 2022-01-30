import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const CommentPost = (props) => {

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [imageURL, setImageURL] = useState(props.imageURL);
    const [comment, setComment] = useState(props.comment);
    const navigate = useNavigate()

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };

    const imageURLChangeHandler = (event) => {
        setImageURL(event.target.value);
    };

    const commentChangeHandler = (event) => {
        setComment(event.target.value);
    };

    const commentPost = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/posts/' + props.title, {
            title: title,
            content: content,
            imageURL: imageURL,
        })
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

            <form>
                <div className="form-label heading-comment--add">
                <div className="white-box text-center"><img src={imageURL} className="img-responsive" alt="" /></div>
                    <label >{title}</label>
                </div>

                <div className="form-label form-label-modal-desc">
                    <label >{content}</label>
                </div>

               


                <input type="text" onChange={commentChangeHandler} placeholder="Komentar" className="form-input-modal" value={comment} />
                <br ></br>

                <button onClick={commentPost} className="btn btn-success form-button  modal-button" >Submit</button>
                <button onClick={props.onClose} className="btn  btn-danger form-button  modal-button close">Close </button>
            </form>
        </>
    );
}