import axios from "axios";

export function Capstone(props) {
  const handleCapstoneSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCapstone(props.student.id, params);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleCapstoneSubmit}>
        <h3>Capstone</h3>
        <label for="name">Capstone Name:</label>
        <br />
        <input type="text" id="name" name="name" defaultValue={props.capstone.name} />
        <br />
        <label for="description">Description:</label>
        <br />
        <input type="text" id="description" name="description" defaultValue={props.capstone.description} />
        <br />
        <label for="url">Link to Capstone:</label>
        <br />
        <input type="text" id="url" name="url" defaultValue={props.capstone.url} />
        <br />
        <label for="screenshot">Screenshot:</label>
        <br />
        <input type="text" id="screenshot" name="screenshot" defaultValue={props.capstone.screenshot} />
        <br />
        <button type="submit">Update Capstone</button>
        <br />
      </form>
    </div>
  );
}
