import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Post } from "./Post"
import Modal from 'react-modal';
import { AddPost } from "./AddPost"
import Button from 'react-bootstrap/Button'

export const Listing = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/posts").then(({ data }) => setNews(data)).catch(error => console.log(error)).finally(() => { setLoading(false) })
    }, [])

    const newsItems = news.map((post, i) => {
        return (
            <Post title={post.title} content={post.content} imageURL={post.imageURL} key={i}>
                <Button>Delete</Button>
            </Post>
        )
    });
    return (
        <>
            {loading ? <h1>Učitavanje...</h1> : <><p className="list-titles">Postovi</p><div className='item-menu'>{newsItems}</div></>}
            <Modal isOpen={modalIsOpen} onRequestClose={(() => { setModalIsOpen(false) })} style={{ overlay: { backgroundColor: "#8080805c", }, content: { marginTop: "50px", width: "750px", left: "50%", transform: "translateX(-50%)", borderRadius: "10px", overflowY: "hidden" } }} >
                <AddPost onClose={(() => { setModalIsOpen(false) })}></AddPost>
            </Modal>
            
        </>
    )
}