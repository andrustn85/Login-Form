
import './App.css';

import Login from "../src/components/Login"


var isLoggedIn = false;

function App() {
 return <div className="container"> {
  isLoggedIn === true ? <h1> Hello </h1> : <Login />
} </div>;
}

export default App;
