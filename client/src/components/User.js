import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export const User = ({user}) => {
    return (
        <div className='one-item'>
            <div className="item-card">
            
                <div className="post-data col-6">
                    <p className="post-title">{user.name}</p>
                    <p className="post-description">{user.username}</p>
                </div>
                <div className="under col">
                    <Link to={`/admin/users/${user.username}`}><Button className="details">Otvori korisnika</Button></Link>
                </div>
            </div>
        </div>
    )
}