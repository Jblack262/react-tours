import React from 'react';

function error() {
  return (
    <div className="errorPage">
      {/* <h1 className="background">404</h1> */}
      <div className="content">
        <h1>Page not found</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <button>Return To Homepage</button>
      </div>
    </div>
  )
}

export default error
