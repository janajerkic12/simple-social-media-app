import Button from 'react-bootstrap/Button'

import { Link } from "react-router-dom"
export const Post = (props) => {
    return (
        <div className='one-item'>
            <div className="item-card">
                <div className="imageOfProduct">
                    <img className="product-image" src={props.imageURL} alt=""></img>
                </div>
                <div className="under">
                    <Link to={`/products/${props.title}`}><Button className="details">Details</Button></Link>
                </div>
            </div>
            <p className="product-title">{props.title}</p>
        </div>
    )
}