import "bootstrap/dist/css/bootstrap.css";
export function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:5173">
          All resumes
        </a>
        <a className="navbar-brand" href="#">
          Update
        </a>
      </nav>
    </header>
  );
}
