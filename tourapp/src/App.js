import './App.css';
import Home from './components/home/Home';
import data from './data/db.json'
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Tour from './components/tours/tour/Tour';
import TourDetails from './components/TourDetails/TourDetails';


function App() {
  return(
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Tours" element={<Tours siteData={data}/>}/>
    {/* <Tours siteData={data}/> */}
    <Route path={`/city/:id`} element={<TourDetails siteData={data}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
