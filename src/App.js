import { useEffect } from "react";
import './App.css';

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
    </div>
  );
}

export default App;
