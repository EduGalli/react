import { Link } from "react-router-dom";
import bannerbaño from "../assets/images/banner-baño.jpg";
import bannerhogar from "../assets/images/banner-hogar.jpg";
import bannerconstruccion from "../assets/images/banner-construccion.jpg";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerbaño})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/baño"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Baño</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerhogar})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/hogar"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Hogar</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerconstruccion})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/category/construccion"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Construcción</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;