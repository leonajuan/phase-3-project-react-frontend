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
  const [user, setUser] = useState({
    id: 1
  })

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then(res => res.json())
      .then(locationsData => {
        setLocations(locationsData)
      })
  }, [])


  return (
    <>
      <Router>
        <Header />
        <LoginForm user={user} />

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
          <LocationsList user={user} locations={locations} />

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
