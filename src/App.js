import React, { useEffect, useState } from 'react';
import Tour from './components/Tour';
import Error from './components/pages/Error';
import Loading from './components/pages/Loading';

const url = "https://course-api.com/react-tours-project";


function App() {
  const [places, setPlaces] = useState([]);//sets items to an empty array before putting api info inside it
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getInfo = async () => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((places) => {
        setPlaces(places);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
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
      {isLoading && (
        <Loading />
      )}
      {isError && (
        <Error />
      )}
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
