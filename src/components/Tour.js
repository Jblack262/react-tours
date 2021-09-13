import React from 'react'

function Tour({place, deletePlace}) {
  const {id, image, name, info, price} = place;
  // console.log(place)
  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="content">
        <h4>{name}</h4>
        <p>{info}</p>
        <h5>${price}</h5>
      </div>
      <div className="btnContainer">
        <button onClick={() => {deletePlace(id)}}>Not Interested</button>
      </div>
    </div>
  )
}

export default Tour
