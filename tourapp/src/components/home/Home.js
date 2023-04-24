// import Header from '../header/Header';
// import Tours from '../tours/Tours';
// import Footer from '../footer/Footer';
// import data from '../../data/db.json';
// import { Routes,Route } from 'react-router-dom';
import styles from "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import'bootstrap/dist/css/bootstrap.min.css'



function Home(props){
    return(
    // <>
    // <Header/>
    // <Routes>
    // <Route path="/" element={<Home/>}/>
    // <Route path="/Tour" element={<Tours siteData={data}/>}/>
    // {/* <Tours siteData={data}/> */}
    // </Routes>
    // <Footer/>
    // </>
    // <div id="homaPage">
        
    // <iframe src="https://www.youtube.com/embed/ZZ5LpwO-An4" frameborder="0" allowfullscreen></iframe>
    // </div>
    <div id="homePage">
    <Carousel className="Carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://w7.pngwing.com/pngs/739/275/png-transparent-rambo-the-video-game-john-rambo-first-blood-sylvester-stallone-rambo-heroes-hand-human.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.tenor.com/q-CmztRV07QAAAAd/cat-cat-meme.gif"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.licdn.com/dms/image/C5612AQF7UtTNuK5gvA/article-cover_image-shrink_600_2000/0/1520044033431?e=2147483647&v=beta&t=4w2yVbC-mAgL6xFdAejFt-kg2qhTYiKzKSmzvWr3ovw"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <iframe src="https://www.youtube.com/embed/ZZ5LpwO-An4" frameborder="0" allowfullscreen></iframe> 
  </div>
    );
};
export default Home;