import axios from "axios";

export function Skills(props) {
  const handleSkillsSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/students/" + 1 + "/skills.json", params).then((response) => {
      const updatedStudent = response.data;
    });
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSkillsSubmit}>
        <h3>Skills</h3>
        <label for="skill_name">Skill:</label>
        <br />
        <input type="text" id="skill_name" name="skill_name" defaultValue={props.skills.skill_name} />
        <br />
        <button type="submit">Update Skills</button>
        <br />
      </form>
    </div>
  );
}
