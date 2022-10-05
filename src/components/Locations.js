function Locations({ location }) {

  const { location_name, address, image_Url, category } = location

  return (
    <li className="card">
      <h2 className="name">{location_name}</h2>
      <img src={image_Url} alt={location_name} />
      <h3 className="address">Located at: {address}</h3>
      <h4 className="category">Category: {category}</h4>
      <button>Add Review</button>
    </li>
  )
}

export default Locations;