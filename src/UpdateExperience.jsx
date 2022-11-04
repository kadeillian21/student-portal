import axios from "axios";

export function Experience(props) {
  const handleExperienceSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExperience(props.experience.id, params);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleExperienceSubmit}>
        <h3>Work Experience</h3>
        <label for="start_date">Start Date:</label>
        <br />
        <input type="date" id="start_date" name="start_date" defaultValue={props.experience.start_date} />
        <br />
        <label for="end_date">End Date:</label>
        <br />
        <input type="date" id="end_date" name="end_date" defaultValue={props.experience.end_date} />
        <br />
        <label for="job_title">Job Title:</label>
        <br />
        <input type="text" id="job_title" name="job_title" defaultValue={props.experience.job_title} />
        <br />
        <label for="company_name">Company Name:</label>
        <br />
        <input type="text" id="company_name" name="company_name" defaultValue={props.experience.company_name} />
        <br />
        <label for="details">Description:</label>
        <br />
        <input type="text" id="details" name="details" defaultValue={props.experience.description} />
        <br />
        <button type="submit">Update Work Experience</button>
        <br />
      </form>
    </div>
  );
}
