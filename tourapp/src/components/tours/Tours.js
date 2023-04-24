import Tour from "./tour/Tour"
import { Routes, Route } from 'react-router-dom';
import styles from './Tours.css'

function Tours(props) {
    return (
        <div className="container">
            {
                props.siteData.map((site, i) => {
                    return (
                        <Tour theSite={site} theId={site.id} />
                    );
                })
            }
        </div>
    
    );
}

export default Tours;