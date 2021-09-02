import React from 'react'

function Tour(place, removeItem) {
  return (
    <div className="tour">
      <img src={place.image} alt={place.name} />
      <div className="content">
        <h4>{place.name}</h4>
        <p>{place.info}</p>
        <h5>${place.price}</h5>
      </div>
      <div className="btnContainer">
        <button onClick={() => removeItem(place.id)}>Not Interested</button>
      </div>
    </div>
  )
}

export default Tour
