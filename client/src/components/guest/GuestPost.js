import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export const GuestPost = (props) => {
    return (
        <div className='one-item'>
            <div className="item-card">
            
                <div className="imageOfPost col">
                    <img className="post-image" src={props.imageURL} alt=""></img>
                </div>
                <div className="post-data col-6">
                    <p className="post-title">{props.title}</p>
                    <p className="post-description">{props.content.slice(0,150)}....</p>
                </div>
                <div className="under col">
                    <Link to={`/guest/${props.title}`}><Button className="details">Otvori objavu</Button></Link>
                </div>
            </div>
        </div>
    )
}