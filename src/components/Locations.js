import Swal from 'sweetalert2'
import { useState } from 'react'
import ReviewItems from '../components/ReviewItems.js'
// import withReactContent from 'sweetalert2-react-content'

function Locations({ locations, reviews, location, user }) {

  const { location_name, address, image_Url, category, id } = location
  const [showReviews, setShowReviews] = useState(false)

  function handleClick(e) {
    // alert(`location id is ${id} and user id is ${user.id}`)
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Add A Review for ${location_name}`,
      inputPlaceholder: 'Type your review here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      preConfirm: (text) => {
        fetch("http://localhost:9292/reviews", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: reviews.length + 1,
            user_id: user.id,
            location_id: location.id,
            description: text
          }),
        })
          .then(res => res.json())
          .then(newReview => {
            console.log(newReview)
          })
      },
      showCancelButton: true
    })

    if (text) {
      Swal.fire(text)
    }
  }

  function editReview(e) {
    console.log(id)
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Edit Review for ${location_name}`,
      inputPlaceholder: 'Edit your review here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      preConfirm: (text) => {
        fetch(`http://localhost:9292/reviews${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: reviews.id,
            user_id: user.id,
            location_id: location.id,
            description: text
          }),
        })
          .then(res => res.json())
          .then(updatedReview => {
            console.log(updatedReview)
          })
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text)
    }
  }
  // fetch(`http://localhost:9292/reviews/${id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify()
  // })
  //   .then(res => res.json())
  //   .then(review => console.log(review))
  // }

  function handleDelete(e) {
    e.target.remove()
    // console.log(id)
    fetch(`http://localhost:9292/reviews/6`, {
      method: 'DELETE',
    })
  }


  // console.log(allReviewsForLocations)
  //  console.log(desc)

  return (
    <li className="card">
      <h2 className="name">{location_name}</h2>

      <img onClick={() => setShowReviews(!showReviews)} src={image_Url} alt={location_name} />

      {showReviews ?
        <ReviewItems id={id} />
        :
        <>
          <h4 className="category">category</h4>
          <h3 className="address"> address </h3>
        </>

      }




      <button onClick={(e) => handleDelete(e.currentTarget)}>X</button>

      <button onClick={handleClick}>Add Review</button>
    </li>
  )
}

export default Locations;