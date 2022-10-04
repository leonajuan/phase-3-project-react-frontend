// import { useState } from 'react'
// import Locations from './components/Locations'

function LocationsList({ locations }) {

  const locationComponents = locations.map(location => {
    console.log(location)// return <Locations key={location.id} location={location} />
  })

  // return (
  //   { locationComponents }
  // )
}

export default LocationsList;