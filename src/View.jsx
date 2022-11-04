import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Update } from "./Update";
import axios from "axios";

export function View() {
  const [currentStudent, setCurrentStudent] = useState({});
  const [isUpdateStudentVisible, setIsUpdateStudentVisible] = useState(false);

  const handleShowStudentUpdate = () => {
    setIsUpdateStudentVisible(true);
  };

  const handleHideShowStudentUpdate = () => {
    setIsUpdateStudentVisible(false);
  };

  const handleStudentShow = (id) => {
    axios.get("http://localhost:3000/students/" + id + ".json").then((response) => {
      const studentInfo = response.data;
      setCurrentStudent(studentInfo);
    });
  };
  const resume = [
    {
      id: 1,
      first_name: "Bob",
      last_name: "Burgers",
      email: "bob@test.com",
      phone_number: "1234567890",
      short_bio: "This is a great bio so please hire me :).",
      linkedin_url: "http://linkedin.test/bestuser",
      twitter_handle: "bobsome",
      personal_blog: "bobblog.test",
      resume_url: "bobresume.test",
      github_url: "bobgithub.test",
      photo_url: "bob.jpeg",
      experience: "experience",
      start_date: "10/22/2000",
      end_date: "6/2/2007",
      job_title: "Software Engineer",
      company_name: "Microsoft",
      deatils: "junior developer",
      education: "Harvard Univesity",
      education_start_date: "",
      education_end_date: " end date ",
      degree: "degress",
      university_name: "university name",
      education_details: "details",
      skills: "skills",
      skill_name: "skill name",
      capstone_name: "your capstone",
      description: "description",
      capstone_url: "capstone url",
      screenshot: "screenshot",
    },
  ];
  return (
    <div>
      <Navbar onSelectUpdateStudent={handleShowStudentUpdate} />

      <div className="index" onSelectUpdate={handleShowStudentUpdate}>
        {resume.map((test) => (
          <div key={resume.id}>
            <h1>
              {" "}
              {test.first_name} {test.last_name}
            </h1>
            <h3> {test.email}</h3>
            <p> Number: {test.phone_number}</p>
            <p> About me: {test.short_bio}</p>
            <a href={test.linkedin_url}>Linkedin</a>
            <p> My Twitter handle: {test.twitter_handle}</p>
            <a href={test.personal_blog}>My Blog</a>
            <div>
              <a href={test.resume_url}> Resume </a>
            </div>
            <a href={test.github_url}>Github</a>
            <div>
              <img src={test.photo_url} alt="Your Profile Pic" />
            </div>
            <body> {test.experience} </body>
            <p>
              {" "}
              Time: {test.start_date} - {test.end_date}{" "}
            </p>
            <p> {test.job_title}</p>
            <p> {test.company_name}</p>
            <p> {test.deatils}</p>
            <p> {test.education} </p>
            <p> {test.education_start_date}</p>
            <p> {test.education_end_date}</p>
            <p> {test.degree}</p>
            <p> {test.university_name}</p>
            <p> {test.education_details}</p>
            <p> {test.skills}</p>
            <p> {test.skill_name}</p>
            <p> {test.capstone_name}</p>
            <p> {test.description}</p>
            <p> {test.capstone_url}</p>
            <p> {test.screenshot}</p>
          </div>
        ))}
        ;
      </div>
      <Modal show={isUpdateStudentVisible} onClose={handleHideShowStudentUpdate}>
        <Update />
      </Modal>
    </div>
  );
}
