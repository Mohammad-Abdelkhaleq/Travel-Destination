import { Link } from "react-router-dom";
import styles from "./Header.css"
function Header(props){
    return(<header>
       <Link to="/"><img src="https://play-lh.googleusercontent.com/WR3z2Me4zgcO1k9G-j6TtPzkwlqILwFzh4NMPGp2oryFJjdeSl2xNbXoavkYNZqQI2o" ></img></Link>
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/Tours">tourInfo </Link>
        </header>
    );
}
export default Header;