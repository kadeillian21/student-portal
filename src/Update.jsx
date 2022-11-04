export function Update(props) {
  const handleStudentInfoSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStudentInfo(props.student.id, params);
    event.target.reset();
  };

  const handleExperienceSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExperience(props.experience.id, params);
    event.target.reset();
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEducation(props.student.id, params);
    event.target.reset();
  };

  const handleSkillsSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSkills(props.student.id, params);
    event.target.reset();
  };

  const handleCapstoneSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCapstone(props.student.id, params);
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
      <form onSubmit={handleSkillsSubmit}>
        <h3>Skills</h3>
        <label for="skill_name">Skill:</label>
        <br />
        <input type="text" id="skill_name" name="skill_name" defaultValue={props.skills.skill_name} />
        <br />
        <button type="submit">Update Skills</button>
        <br />
      </form>
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
