import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Header from './components/Header'
import NewReviewForm from './components/NewReviewForm'

function App() {

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <>
      <Router>
        <Header />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Locations</Link>
              </li>
              <li>
                <Link to="/about">Reviews</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/locations">
              {/* <About /> */}
            </Route>
            <Route path="/reviews">
              {/* <Users /> */}
            </Route>
            <Route path="/users">
              {/* <Home /> */}
            </Route>
          </Switch>
        </div>
      </Router>

      <NewReviewForm />
    </>
  );
}

export default App;
