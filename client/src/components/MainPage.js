import './styles/MainPage.css'

 export const MainPage = () => {
    return (
        <>
            <div className="background" >
            <object className="section">
                <h1 className="title">Info portal</h1>
                <p className="description">Uvijek imaj pristup najnovijim informacijama</p>
                <button className="btn btn-primary btn-lg home-btn">Prijava</button>
                <button className="btn btn-primary btn-lg home-btn">Registracija</button>
                <p className="guest">Nastavi kao gost</p>
            </object>
        </div>
        </>
    );
}

