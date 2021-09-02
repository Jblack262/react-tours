import React, { useEffect, useState } from 'react';

import ToursContainer from './components/ToursContainer'

function App() {
  const [items, setItems] = useState([]);//sets items to an empty array before putting api info inside it
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result); //api result goes into items array
        }
      )
  }, [])
  return (
    <div className="App">
      <ToursContainer data={items}/>
    </div>
  );
}

export default App;
