import React, { useEffect, useState } from 'react';
import Tour from './components/Tour';

const url = "https://course-api.com/react-tours-project";


function App() {
  const [places, setPlaces] = useState([]);//sets items to an empty array before putting api info inside it

  const getInfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPlaces(data);
    // console.log(data);
  }
  
  useEffect(() => {
    getInfo();
  }, []);

  const deletePlace = (id) => {
    let newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  }

  return (
    <div className="App">
      {places.map((place) => {
        // console.log(place)
        return (
          <Tour key={place.id} place={place} deletePlace={deletePlace}/>
        )
      })}
    </div>
  );
}

export default App;
