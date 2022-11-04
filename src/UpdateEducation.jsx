import axios from "axios";

export function Education(props) {
  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEducation(props.student.id, params);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleEducationSubmit}>
        <h3>Education</h3>
        <label for="start_date">Start Date:</label>
        <br />
        <input type="date" id="start_date" name="start_date" defaultValue={props.education.start_date} />
        <br />
        <label for="end_date">End Date:</label>
        <br />
        <input type="date" id="end_date" name="end_date" defaultValue={props.education.end_date} />
        <br />
        <label for="degree">Degree:</label>
        <br />
        <input type="text" id="degree" name="degree" defaultValue={props.education.degree} />
        <br />
        <label for="university_name">University Name:</label>
        <br />
        <input type="text" id="university_name" name="university_name" defaultValue={props.education.university_name} />
        <br />
        <label for="details">Description:</label>
        <br />
        <input type="text" id="details" name="details" defaultValue={props.education.description} />
        <br />
        <button type="submit">Update Education</button>
        <br />
      </form>
    </div>
  );
}
