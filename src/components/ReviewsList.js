

function ReviewsList({reviews, locations}) {
  
  // const filteredReviews = reviews.filter(review => {
  //   return review.location_id === 1 
  // }) 
  // console.log(reviews)
  // console.log(filteredReviews)

  


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
  // const locationReviews = allReviewsForLocations.map(reviewArray => {
  //   if(reviewArray.length >= 1)
  //     return reviewArray.map(review => {
  //       console.log(review)
  //       return reviewArray
        
  //     })
  // })

  // const notZero = locationReviews.filter(locationReview =>{
  //   return locationReview !== undefined
    
  // })

  // const pleaseWork = notZero.map(r => {
  //   return r.map(re => {
  //     return re.description 
  //   })
  // })
    const test = locations.map(location => {
      return (
      <li className="card">
      <h2 className="name">{location.location_name}</h2>
      <img src={location.image_Url} alt={location.location_name} />
      <h3 className="address">Located at: {location.address}</h3>
      <h4 className="category">Category: {location.category}</h4>
      <h4 className="review">Reviews: {desc[location.id-1]}</h4>
      {/* <button onClick={handleClick}>Add Review</button> */}
      </li>
      )
    })
      
  
  
  // console.log(locationReviews)
  // console.log(notZero)
  // console.log(pleaseWork)




  return (
    <main className="cards">
      {test}
    </main>    
  )
}

export default ReviewsList;