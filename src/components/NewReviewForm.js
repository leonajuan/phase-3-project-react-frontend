function NewReviewForm() {
  return (
    <div className="new-review">
      <h2>Add A Review</h2>
      <form>
        <input type="text" name="name" placeholder="Username" />
        <input type="text" name="location" placeholder="Location Name" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="image" placeholder="Image" />
        <input type="text" name="category" placeholder="Category" />
        <input type="text" name="description" placeholder="Description" />
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewReviewForm;