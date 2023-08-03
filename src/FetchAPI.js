import React from 'react'

function FetchAPI() {
    fetch("http://ergast.com/api/f1/2019")
    .then((response) => {
       console.log(response);
    })
  return (
    <div>
      F1
    </div>
  )
}

export default FetchAPI
