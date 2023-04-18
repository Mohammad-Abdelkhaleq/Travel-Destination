import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import data from '../../data/db.json';

function Home(props){
    return(
    <>
    <Header/>
    <Tours siteData={data}/>
    <Footer/>
    </>
    );
};
export default Home;