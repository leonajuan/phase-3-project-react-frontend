import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Locations({ location, user }) {

  const { location_name, address, image_Url, category, id } = location

  function handleClick(e) {
    // alert(`location id is ${id} and user id is ${user.id}`)
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Add A Review for ${location_name}`,
      inputPlaceholder: 'Type your review here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      Swal.fire(text)
    }
    console.log(id)
    // fetch("http://localhost:9292/reviews", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     id: reviews.length + 1,
    //     user_id: user.id,
    //     location_id: location.id,
    //     description: description
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(newReview => {
    //     console.log(newReview)
    //   })
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