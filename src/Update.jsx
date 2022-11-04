import { UpdateStudentInfo } from "./UpdateStudentInfo";

export function Update(props) {
  return (
    <div>
      <UpdateStudentInfo student={props.student} />
    </div>
  );
}
