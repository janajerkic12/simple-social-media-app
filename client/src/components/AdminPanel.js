import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"


export const AdminPanel = () => {
    return (
        <div className="background" >
            <object className="section">
                <h1 className="title">Admin panel</h1>
                <Link to='/admin/users'><Button className="btn btn-primary btn-lg home-btn">Pregledaj korisnike</Button></Link>
                <Link to='/posts'><Button className="btn btn-primary btn-lg home-btn">Pregledaj postove</Button></Link>
            </object>
        </div>
    );

}