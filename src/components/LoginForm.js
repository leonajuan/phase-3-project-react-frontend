function LoginForm() {
  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form>
        <input type="text" name="name" label="Username" placeholder="Username" />
        <input type="text" name="name" label="Password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;