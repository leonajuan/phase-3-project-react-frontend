function LoginForm({ user }) {

  function handleSubmit(e) {
    e.preventDefault()

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