import { useState } from "react";
import { Link } from "react-router-dom";
type User = {
  username: string;
};

function Register() {
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useState<User | undefined>(undefined);
  return (
    <div>
      Create Account
      <input
        placeholder="Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setUsername("")}>Send</button>
      <Link to={"/"}>Back</Link>
      <div data-testid="userData"> {data?.username} </div>
    </div>
  );
}
export default Register;
