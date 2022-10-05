// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import LocationsList from './components/LocationsList'
import LoginForm from './components/LoginForm'

function App() {

  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then(res => res.json())
      .then(locationsData => {
        setLocations(locationsData)
      })
  }, [])

  return (
    <>
      {/* <Router> */}
      <Header />
      <LoginForm />
      <LocationsList locations={locations} />
      {/* <LocationsList /> */}
      {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Locations</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
            <Route path="/locations">
              <LocationsList locations={locations} />
            </Route>
            <Route path="/reviews">
              {/* <Users /> */}
      {/* </Route>
            <Route path="/users"> */}
      {/* <Home /> */}
      {/* </Route> */}
      {/* </Switch> */}
      {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
