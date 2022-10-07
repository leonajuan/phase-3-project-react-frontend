import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import LocationsList from './components/LocationsList'
import LoginForm from './components/LoginForm'
import AddLocationForm from './components/AddLocationForm'
import UserSignUpForm from './components/UserSignUpForm'
import Navbar from "./components/Navbar"

function App() {

  const [locations, setLocations] = useState([])
  const [user, setUser] = useState({})

  const [reviews, setReviews] = useState([])

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
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/">
              <LoginForm setUser={setUser} user={user} />
              <LocationsList user={user} reviews={reviews} locations={locations} />
            </Route>
            <Route exact path="/users">
              <UserSignUpForm users={user} />
            </Route>
            <Route exact path="/locations">
              <AddLocationForm locations={locations} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
