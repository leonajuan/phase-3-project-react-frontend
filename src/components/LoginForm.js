import { useState } from 'react';

function LoginForm({ user, userId, setId }) {

  const [login, setLogin] = useState(false)

  // const { username, password, id } = user
  console.log(user)
  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target["name"].value
    const pass = e.target["pass"].value
    const idOfUser = user.find(eachUser => name === eachUser.username && pass === eachUser.password).id
    if (user.find(eachUser => name === eachUser.username && pass === eachUser.password)) {


      alert("login!")
      setLogin(true)
      setId(idOfUser)
      console.log(login)
      console.log(userId)
    } else {
      setLogin(false)
      alert("can't login!")
    }
  }

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" label="Username" placeholder="Username" />
        <input type="text" name="pass" label="Password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;