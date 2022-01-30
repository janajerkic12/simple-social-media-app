import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

 export const MainPage = () => {
    return (
        <>
            <div className="background" >
            <object className="section">
                <h1 className="title">Info portal</h1>
                <p className="description">Uvijek imaj pristup najnovijim informacijama</p>
                <Link to='/login'><Button className="btn btn-primary btn-lg home-btn">Prijava</Button></Link>
                <Link to='/register'><Button className="btn btn-primary btn-lg home-btn">Registracija</Button></Link>
                <Link to='/login'><p className="guest">Nastavi kao gost</p></Link>
            </object>
        </div>
        </>
    );
}

