import axios from "axios";
import { Navbar } from "./Navbar";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-dark login-height">
        <form onSubmit={handleLogin}>
          <h4 className="mt-5 pt-5 pb-5">Login</h4>
          <div>Email</div>
          <input type="email" name="email" />
          <div>Password</div>
          <input className="mb-3" type="password" name="password" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
