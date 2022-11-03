import "bootstrap/dist/css/bootstrap.css";

export function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:5173">
          All resumes
        </a>
        <button onClick={props.onSelectUpdateStudent} className="navbar-brand">
          Update
        </button>
      </nav>
    </header>
  );
}
