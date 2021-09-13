import React from 'react';
import LoadingIcons from 'react-loading-icons'

function Loading() {
  return (
    <div className="loadingPage">
      <LoadingIcons.Circles width="100" height="100"/>
      <div className="text">
        <h1>Loading</h1>
        <LoadingIcons.ThreeDots/>
      </div>
    </div>
  )
}

export default Loading
