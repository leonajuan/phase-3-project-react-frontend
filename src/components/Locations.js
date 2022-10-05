import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Locations({ location, user }) {

  const { location_name, address, image_Url, category, id } = location

  function handleClick(e) {
    console.log(e.target)
    alert(`location id is ${id} and user id is ${user.id}`)
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: 'Add A Review',
      inputPlaceholder: 'Type your review here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      Swal.fire(text)
    }
  }

  return (
    <li className="card">
      <h2 className="name">{location_name}</h2>
      <img src={image_Url} alt={location_name} />
      <h3 className="address">Located at: {address}</h3>
      <h4 className="category">Category: {category}</h4>
      <button onClick={handleClick}>Add Review</button>
    </li>
  )
}

export default Locations;