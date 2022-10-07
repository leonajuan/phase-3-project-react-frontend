// import { useState } from 'react'
// import Locations from './components/Locations'
import Locations from './Locations'

// function LocationsList({ locations }) {
function LocationsList({ locations, user, reviews }) {

  return (
    <main className="cards">
      {locations.map(location => (
        <Locations user={user} key={location.id} location={location} locations={locations} reviews={reviews} />
      ))}

    </main>
  )
}

export default LocationsList;