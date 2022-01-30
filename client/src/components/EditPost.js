import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export const EditPost = (props) => {

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

    const editPost = (e) => {
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

    const deleteComment = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/posts/' + props.title, {
            comment: "",
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
            <h1>Edit product</h1>
            <form>
                <div className="form-label">
                    <label >Title</label>
                </div>
                <input type="text" onChange={titleChangeHandler} placeholder="Enter product title" className="form-input-modal" value={title} />
                <br ></br>
                <div className="form-label">
                    <label >Content</label>
                </div>
                <input type="text" onChange={contentChangeHandler} placeholder="Enter product description" className="form-input-modal" value={content} />
                <br ></br>
                <div className="form-label">
                    <label >ImageURL</label>
                </div>

                <input type="text" onChange={imageURLChangeHandler} placeholder="Enter product image URL" className="form-input-modal" value={imageURL} />
                <br ></br>


                <button onClick={editPost} className="btn btn-success form-button  modal-button" >Submit</button>
                <button onClick={props.onClose} className="btn  btn-danger form-button  modal-button close">Close </button>
            </form>
        </>
    );
}