import Swal from 'sweetalert2'
import {useState} from 'react'
// import withReactContent from 'sweetalert2-react-content'

function Locations({ locations, reviews, location, user }) {

  const { location_name, address, image_Url, category, id } = location
  const [text, setText] = useState(true)

  function handleClick(e) {
    console.log(e.target)
    alert(`location id is ${id} and user id is ${user.id}`)
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
  console.log(allReviewsForLocations)
  console.log(desc)

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