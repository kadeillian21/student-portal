import axios from "axios";

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
      .response((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        // window.location.href = "/"; REDIRECT?
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>Email</div>
        <input type="email" name="email" />
        <div>Password</div>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
