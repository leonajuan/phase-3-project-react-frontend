import { useEffect } from "react";

function LoginForm() {

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(usersData => {
        usersData.map(user => {
          console.log(user)
        })
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form>
        <input type="text" name="name" label="Username" placeholder="Username" />
        <input type="text" name="name" label="Password" placeholder="Password" />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;