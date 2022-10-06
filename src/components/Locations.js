import Swal from 'sweetalert2'
import { useState } from 'react'
// import withReactContent from 'sweetalert2-react-content'

function Locations({ locations, reviews, location, user }) {

  const { location_name, address, image_Url, category, id } = location
  const [text, setText] = useState(true)

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
        // console.log(text, user.id, id);
        // make post with above values
        //  to /reviews POST
      },
      showCancelButton: true
    })

    if (text) {
      Swal.fire(text)
    }
    // console.log(id)
    // 
  }


  function handleDelete(e) {
      e.target.remove()
    console.log(id)
    fetch(`http://localhost:9292/reviews/6`, {
      method: 'DELETE',
    })
  }
console.log(reviews)
  const filteredReviews = reviews.filter(review =>{

    return review !== undefined
  })

  const allReviewsForLocations = locations.map(location => {
    return filteredReviews.filter(review => {
      return review.location_id === location.id
    })
  })

  const desc = allReviewsForLocations.map(review => {
    return review.map(r => {
      return r.description
    })
  })
  // console.log(allReviewsForLocations)
  //  console.log(desc)

  return (
    <li className="card">
      <h2 className="name">{location_name}</h2>

      <img onClick={()=>setText(!text)}src={image_Url} alt={location_name} />
      <h3 className="address"> {text ? "Located at:" + address : desc[id-1].map(d=><div onClick={(e)=>handleDelete(e)}>{d+"\n"}</div>)}</h3>

      <h4 className="category">{text ? "Category: " + category : ""}</h4>
      <button onClick={handleClick}>Add Review</button>
    </li>
  )
}

export default Locations;