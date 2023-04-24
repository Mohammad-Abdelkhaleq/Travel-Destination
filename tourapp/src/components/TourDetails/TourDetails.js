import { Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';

function TourDetails(props) {
  const  {id}  = useParams();

  
  function findthecity(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === value) {
        return arr[i];
      }
    }
    return null;
  }
  
  let site = findthecity(props.siteData,id);
  
  const [showFullDescription,setShowFullDescription]=useState(false)
  let truncatedText=!showFullDescription? site.info.slice(0,site.info.length/2)+"......":site.info;
  const changeButton=()=>{setShowFullDescription(!showFullDescription)}



  return (
    <>
      <div>
        <h3>{site.name}</h3>
        <img src={site.image} alt={site.info} />
        <p>{truncatedText}</p>
        {!showFullDescription?<button onClick={changeButton}>read more</button>:<button onClick={changeButton} >read less</button>}
      </div>
    </>
  );
}

export default TourDetails;
