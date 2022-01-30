import { useState } from "react";
import axios from "axios";

export const AddPost = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageURL, setImageURL] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };

    const imageURLChangeHandler = (event) => {
        setImageURL(event.target.value);
    };


    const addPost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/posts', {
            title: title,
            content: content,
            imageURL: imageURL,
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
                <h1>Kreiraj novi post</h1>
                <div className="flex-centers">
                    <form>
                        <div className="form-label">
                            <label >Naslov</label>
                        </div>
                        <input type="text" onChange={titleChangeHandler} placeholder="Naslov: " className="form-input-modal" value={title} />
                        <br ></br>
                        <div className="form-label">
                            <label >Opis</label>
                        </div>
                        <input type="text" onChange={contentChangeHandler} placeholder="Opis: " className="form-input-modal" value={content} />
                        <br ></br>
                        <div className="form-label">
                            <label >URL slike</label>
                        </div>

                        <input type="text" onChange={imageURLChangeHandler} placeholder="URL slike: " className="form-input-modal" value={imageURL} />
                        <br ></br>

                        <div className="add-buttons">
                            <button onClick={addPost} className="btn btn-success form-button  modal-button" >Kreiraj</button>
                            <button onClick={props.onClose} className="btn  btn-danger form-button  modal-button close">Zatvori </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}