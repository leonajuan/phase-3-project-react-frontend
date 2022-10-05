import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import LocationsList from './components/LocationsList'
import LoginForm from './components/LoginForm'

function App() {

  const [locations, setLocations] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then(res => res.json())
      .then(locationsData => {
        setLocations(locationsData)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(usersData => {
        setUsers(usersData)
      })
  }, [])

  return (
    <>
      <Router>
        <Header />
        <LoginForm users={users} />

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <LocationsList locations={locations} />

          <Switch>
            <Route path="/">
            </Route>
            <Route path="/reviews">
            </Route>
            <Route path="/users">
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
