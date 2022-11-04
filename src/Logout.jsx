import axios from "axios";

export function Logout() {
  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "http://localhost:5173";
  };

  return (
    <a className="btn btn-light me-3" href="#" onClick={handleLogout}>
      Logout
    </a>
  );
}
