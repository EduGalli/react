import logo from "../assets/images/logo1.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="Mauri" width={320} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Hogar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Construcción</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default NavBar;