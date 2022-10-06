import { useState, useEffect } from 'react'
function ReviewItems({ id }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    if (reviews.length === 0) {
      fetch(`http://localhost:9292/locations/${id}`)
        .then(res => res.json())
        .then(data => {
          setReviews(data.reviews);

        })
    }
  }, [])

  return (
    <>
      {reviews.map(review => (
        <h1 key={review.id}>{review.description}</h1>
      ))}
    </>

  )
}

export default ReviewItems;