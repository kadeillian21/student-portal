import "bootstrap/dist/css/bootstrap.css";
import { Logout } from "./Logout";

export function Navbar(props) {
  return (
    <div className="full-width fixed-top">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="btn btn-light ms-3 me-3" href="http://localhost:5173">
            All resumes
          </a>
          <button
            onClick={props.onSelectUpdateStudent}
            className="btn btn-light me-3"
          >
            Update
          </button>
          <Logout />
        </nav>
      </header>
    </div>
  );
}
