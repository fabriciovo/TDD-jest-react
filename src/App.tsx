import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Hello World!
      <Link to={"/Register"}>Create Account</Link>
    </div>
  );
}

export default App;
