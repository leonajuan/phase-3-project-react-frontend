function LoginForm({ users }) {

  const individualUsers = users.map(user => {
    console.log(user)
  })

  // login is incorrect - currently letting anyone login
  function handleSubmit(e) {
    e.preventDefault()
    if (individualUsers.id === individualUsers.id && individualUsers.password === individualUsers.password) {
      alert("you can log in!")
    } else {
      alert("wrong information!")
    }
  }

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" label="Username" placeholder="Username" />
        <input type="text" name="name" label="Password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;