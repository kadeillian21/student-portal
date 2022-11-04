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
  return (
    <div>
      <Navbar onSelectUpdateStudent={handleShowStudentUpdate} />
      {/* <Login /> */}
      <div className="index">
        <h1> First Name </h1>
        <h1> Last Name</h1>
        <h3> Email</h3>
        <p> Phone Number</p>
        <p> Short Bio</p>
        <p> Linkedin URL</p>
        <p> Twitter Handle</p>
        <p> Personal Blog/Website URL</p>
        <p> Online Resume URL</p>
        <p> Github URL</p>
        <p> Will be a photo</p>
        <h4> Experience </h4>
        <p> Start Date </p>
        <p> end date</p>
        <p> job title</p>
        <p> company name</p>
        <p> details</p>
        <h1> Education</h1>
        <p> start date</p>
        <p> end date</p>
        <p> degree</p>
        <p> university name</p>
        <p> details </p>
        <h1> Skills</h1>
        <p> skill name</p>
        <h1> Capstone</h1>
        <p> name</p>
        <p> description</p>
        <p> URL </p>
        <p> screenshot</p>
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
