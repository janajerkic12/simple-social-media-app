import { useNavigate } from "react-router"


export const Navigation = () => {

    const navigtate = useNavigate();

    return (
        <div className="navbar">
            <div onClick={() => { navigtate('/posts') }} className="navbar-item">Početna</div>
            <div className="navbar-item">about</div>
            <div className="navbar-item">FAQ</div>
        </div>
    )
}