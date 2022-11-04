import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Update } from "./Update";

export function View() {
  const [isUpdateStudentVisible, setIsUpdateStudentVisible] = useState(false);

  const handleShowStudentUpdate = () => {
    setIsUpdateStudentVisible(true);
  };

  const handleHideShowStudentUpdate = () => {
    setIsUpdateStudentVisible(false);
  };

  const resume = [
    {
      id: 1,
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone_number: "Phone Number",
      short_bio: "Short Bio",
      linkedin_url: "Linkedn Url",
      twitter_handle: "Twitter Handle",
      personal_blog: "personal blog",
      online_resume: "Online Reseme Url",
      github_url: "Github url",
      photo_url: "photo url",
      expirience: "expirience ",
      start_date: "stard",
      end_date: "end date",
      job_title: "job title",
      company_name: "company name",
      deatils: "details",
      education: "education",
      education_start_date: "start date",
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

      <Login />
      
      <div className="index" onSelectUpdate={handleShowStudentUpdate}>
        {resume.map((test) => (
          <div key={resume.id}>
            <h1> {test.first_name} </h1>
            <h1> {test.last_name}</h1>
            <h3> {test.email}</h3>
            <p> {test.phone_number}</p>
            <p> {test.short_bio}</p>
            <p> {test.linkedin_url}</p>
            <p> {test.twitter_handle}</p>
            <p> {test.personal_blog}</p>
            <p> {test.online_resume}</p>
            <p> {test.github_url}</p>
            <p> {test.photo_url}</p>
            <h4> {test.expirience} </h4>
            <p> {test.start_date} </p>
            <p> {test.end_date}</p>
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
      <Modal
        show={isUpdateStudentVisible}
        onClose={handleHideShowStudentUpdate}
      >
        <Update />
      </Modal>
    </div>
  );
}
