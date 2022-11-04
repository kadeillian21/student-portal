export function Update() {
  return (
    <form>
      <div>
        <h3>Student Info</h3>
        <label for="first_name">First Name:</label>
        <br />
        <input type="text" id="first_name" name="first_name" />
        <br />
        <label for="last_name">Last Name:</label>
        <br />
        <input type="text" id="last_name" name="last_name" />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label for="phone_number">Phone Number:</label>
        <br />
        <input type="text" id="phone_number" name="phone_number" />
        <br />
        <label for="short_bio">About Me:</label>
        <br />
        <input type="text" id="short_bio" name="short_bio" />
        <br />
        <label for="linkedin_url">LinkedIn:</label>
        <br />
        <input type="text" id="linkedin_url" name="linkedin_url" />
        <br />
        <label for="twitter_handle">Twitter:</label>
        <br />
        <input type="text" id="twitter_handle" name="twitter_handle" />
        <br />
        <label for="website_blog_url">Blog:</label>
        <br />
        <input type="text" id="website_blog_url" name="website_blog_url" />
        <br />
        <label for="resume_url">Resume:</label>
        <br />
        <input type="text" id="resume_url" name="resume_url" />
        <br />
        <label for="github_url">Github:</label>
        <br />
        <input type="text" id="github_url" name="github_url" />
        <br />
        <label for="photo">Profile Image:</label>
        <br />
        <input type="text" id="photo" name="photo" />
        <br />
        <button type="submit">Update Student Info</button>
      </div>
      <div>
        <h3>Work Experience</h3>
        <label for="start_date">Start Date:</label>
        <br />
        <input type="date" id="start_date" name="start_date" />
        <br />
        <label for="end_date">End Date:</label>
        <br />
        <input type="date" id="end_date" name="end_date" />
        <br />
        <label for="job_title">Job Title:</label>
        <br />
        <input type="text" id="job_title" name="job_title" />
        <br />
        <label for="company_name">Company Name:</label>
        <br />
        <input type="text" id="company_name" name="company_name" />
        <br />
        <label for="details">Description:</label>
        <br />
        <input type="text" id="details" name="details" />
        <br />
        <button type="submit">Update Work Experience</button>
      </div>
      <div>
        <h3>Education</h3>
        <label for="start_date">Start Date:</label>
        <br />
        <input type="date" id="start_date" name="start_date" />
        <br />
        <label for="end_date">End Date:</label>
        <br />
        <input type="date" id="end_date" name="end_date" />
        <br />
        <label for="degree">Degree:</label>
        <br />
        <input type="text" id="degree" name="degree" />
        <br />
        <label for="university_name">University Name:</label>
        <br />
        <input type="text" id="university_name" name="university_name" />
        <br />
        <label for="details">Description:</label>
        <br />
        <input type="text" id="details" name="details" />
        <br />
        <button type="submit">Update Education</button>
      </div>
      <div>
        <h3>Skills</h3>
        <label for="skill_name">Skill:</label>
        <br />
        <input type="text" id="skill_name" name="skill_name" />
        <br />
        <button type="submit">Update Skills</button>
      </div>
      <div>
        <h3>Capstone</h3>
        <label for="name">Capstone Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label for="description">Description:</label>
        <br />
        <input type="text" id="description" name="description" />
        <br />
        <label for="url">Link to Capstone:</label>
        <br />
        <input type="text" id="url" name="url" />
        <br />
        <label for="screenshot">Screenshot:</label>
        <br />
        <input type="text" id="screenshot" name="screenshot" />
        <br />
        <button type="submit">Update Capstone</button>
      </div>
    </form>
  );
}
