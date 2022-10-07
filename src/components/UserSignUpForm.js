function UserSignUpForm({ users }) {
  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target["username"].value
    const password = e.target["password"].value
    if (username !== "" && password !== "") {
      alert(`You have been signed up, ${username}`)
      fetch("http://localhost:9292/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: users.length + 1,
          username: username,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(newUser => {
          console.log(newUser)
        })
    }
  }
  return (
    <form className="new-user-sign-up" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="new-user-header">Sign Up</h2>
      <br></br>
      <div class="form-outline mb-4">
        <input type="text" id="form1" name="username" class="form-control" />
        <label class="form-label" for="form1">Username</label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="form1" name="password" class="form-control" />
        <label class="form-label" for="form1">Password</label>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Sign up</button>
    </form>)
}
export default UserSignUpForm;