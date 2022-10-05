// import { useState } from 'react'
// import Locations from './components/Locations'
import Locations from './Locations'

// function LocationsList({ locations }) {
function LocationsList({ locations, user }) {

  const locationComponents = locations.map(location => {
    return <Locations user={user} key={location.id} location={location} />
  })

  return (
    <main className="cards">
      {locationComponents}
    </main>
  )
}

export default LocationsList;