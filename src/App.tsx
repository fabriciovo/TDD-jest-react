import { useState } from "react";

function App() {
  const [username, setUsername] = useState<string>("");
  return (
    <div className="App">
      <input
        placeholder="Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={()=> setUsername("")}>Send</button>
    </div>
  );
}

export default App;
