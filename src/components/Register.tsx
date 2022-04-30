import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState<string>("");
  const [listUsernames, setUsernames] = useState<string[]>([]);
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
      <div>
        <ul>
          {listUsernames?.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Register;
