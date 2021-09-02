import React, { useState } from 'react'
import Tour from './Tour';

function ToursContainer({data}) {
  const [places, setPlaces] = useState(data);
  console.log(places)
  console.log(data)
  function deleteTour(id) {
    setPlaces(data);
  }

  return (
    <div>
      {places.map((place) => {
        return (
          <Tour key={place.id} place={place} removeItem={deleteTour}/>
        )
      })}
    </div>
  )
}

export default ToursContainer
