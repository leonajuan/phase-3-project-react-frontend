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
    <div>
      <Header />
      <NewReviewForm />
    </div>
  );
}

export default App;
