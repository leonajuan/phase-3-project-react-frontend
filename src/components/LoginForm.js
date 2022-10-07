import { useState } from 'react';

function LoginForm({ user, setUser }) {

  const [login, setLogin] = useState(false)

  // const { username, password, id } = user
  //  console.log(user)
  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target["name"].value
    const pass = e.target["pass"].value
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: name, password: pass })
    }).then(res => res.json())
      .then(data => {
        if (data["id"]) {
          setUser({ ...data })
        }
      })
    setLogin(true)
  }

  return (
    <div className="login-form">
      {user.id ? <button>Sign Out</button> : <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type="text" name="name" label="Username" placeholder="Username" />
        <input type="text" name="pass" label="Password" placeholder="Password" />
        <button>Submit</button>
      </form>}
    </div>
  )
}

export default LoginForm;