import Swal from 'sweetalert2'
import { useState } from 'react'
import Locations from './Locations';

function AddLocationForm({ locations }) {

  const [locationName, setLocationName] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")

  function handleLocationSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/locations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: Locations.length + 1,
        location_name: locationName,
        address: address,
        image_Url: image,
        category: category
      })
    })
      .then(res => res.json())
      .then(newLocation => {
        console.log(newLocation)
      })
  }

  return (
    <>
      <form onSubmit={handleLocationSubmit}>
        <h2>Add A New Location</h2>
        <input type="text" name="name" placeholder="Location Name" value={locationName} onChange={(e) => setLocationName(e.target.value)} />
        <input type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddLocationForm;