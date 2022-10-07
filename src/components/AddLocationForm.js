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
    <div className="form-floating mb-3">
      <form onSubmit={handleLocationSubmit}>
        <h2>Add A New Location</h2>
        <label for="floatingInput">Location Name</label>
        <input className="form-control" type="text" name="name" placeholder="Location Name" value={locationName} onChange={(e) => setLocationName(e.target.value)} />

        <label for="floatingInput">Address</label>
        <input className="form-control" type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label for="floatingInput">Image URL</label>
        <input className="form-control" type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />

        <label for="floatingInput">Category</label>
        <input className="form-control" type="text" name="category" placeholder="Restaurant, Attraction, Venue, etc." value={category} onChange={(e) => setCategory(e.target.value)} />
        <button className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  )
}

export default AddLocationForm;