import axios from "axios";

export function UpdateStudentInfo(props) {
  const handleStudentInfoSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/students/" + 1 + ".json", params).then((response) => {
      const updatedStudent = response.data;
    });
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleStudentInfoSubmit}>
        <h3>Student Info</h3>
        <label for="first_name">First Name:</label>
        <br />
        <input type="text" id="first_name" name="first_name" defaultValue={props.student.first_name} />
        <br />
        <label for="last_name">Last Name:</label>
        <br />
        <input type="text" id="last_name" name="last_name" defaultValue={props.student.last_name} />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" defaultValue={props.student.email} />
        <br />
        <label for="password">Password:</label>
        <br />
        <input type="text" id="password" name="password" defaultValue={props.student.password} />
        <br />
        <label for="phone_number">Phone Number:</label>
        <br />
        <input type="text" id="phone_number" name="phone_number" defaultValue={props.student.phone_number} />
        <br />
        <label for="short_bio">About Me:</label>
        <br />
        <input type="text" id="short_bio" name="short_bio" defaultValue={props.student.short_bio} />
        <br />
        <label for="linkedin_url">LinkedIn:</label>
        <br />
        <input type="text" id="linkedin_url" name="linkedin_url" defaultValue={props.student.linkedin_url} />
        <br />
        <label for="twitter_handle">Twitter:</label>
        <br />
        <input type="text" id="twitter_handle" name="twitter_handle" defaultValue={props.student.twitter_handle} />
        <br />
        <label for="website_blog_url">Blog:</label>
        <br />
        <input
          type="text"
          id="website_blog_url"
          name="website_blog_url"
          defaultValue={props.student.website_blog_url}
        />
        <br />
        <label for="resume_url">Resume:</label>
        <br />
        <input type="text" id="resume_url" name="resume_url" defaultValue={props.student.resume_url} />
        <br />
        <label for="github_url">Github:</label>
        <br />
        <input type="text" id="github_url" name="github_url" defaultValue={props.student.github_url} />
        <br />
        <label for="photo">Profile Image:</label>
        <br />
        <input type="text" id="photo" name="photo" defaultValue={props.student.photo} />
        <br />
        <button type="submit">Update Student Info</button>
        <br />
      </form>
    </div>
  );
}
