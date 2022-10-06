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
import ReviewsList from './components/ReviewsList'
import ReviewItem from './components/ReviewItem'


function App() {

  const [locations, setLocations] = useState([])
  const [user, setUser] = useState({
    id: 1
  })
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then(res => res.json())
      .then(locationsData => {
        setLocations(locationsData)
      })
  }, [])


  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(res => res.json())
      .then(reviewsData => {
        setReviews(reviewsData)
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
          <LocationsList user={user} reviews={reviews} locations={locations} />
          <ReviewItem />

          <Switch>
            <Route exact path="/">
              {/* <LocationsList locations={locations} reviews={reviews}/> */}
            </Route>
            <Route exact path="/reviews">
              <ReviewsList reviews={reviews} locations={locations} />
            </Route>
            <Route exact path="/users">
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
