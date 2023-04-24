import { Link } from "react-router-dom";
import styles from './Tour.css'

function Tour(props) {
    let i=props.theId;
    let site=props.theSite
    function idReturn(){
        return
    }
    return (<>
        <Link to ={`/city/${i}`}>
        <div className="tourListDivs" key={i}>
            <h3>{site.name}</h3>
            <img className="tourImg" src={site.image} alt={site.info} />
            <hr style={{ border: '1px solid blue' }} />
        </div>
        </Link>

    </>);
}
export default Tour;