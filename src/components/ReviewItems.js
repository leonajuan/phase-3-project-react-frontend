import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'

function ReviewItems({ id, user }) {
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

  function editReview(reviewId) {
    const { value: text } = Swal.fire({
      input: 'textarea',
      inputLabel: `Edit Review`,
      inputPlaceholder: 'Edit your review here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      preConfirm: (text) => {
        fetch(`http://localhost:9292/reviews/${reviewId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: user.id,
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



  function handleDeleteClick(reviewId) {
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(deletedReview => {
        let filteredArray = reviews.filter(review => review.id !== deletedReview.id)
        setReviews(filteredArray)
      })

  }



  return (
    <>
      {reviews.map(review => (
        <div className="review-item">
          <li key={review.id}>{review.description}</li> <button onClick={() => editReview(review.id)}>EDIT</button> <button onClick={() => handleDeleteClick(review.id)}>X</button>
        </div>
      ))}
    </>

  )
}

export default ReviewItems;