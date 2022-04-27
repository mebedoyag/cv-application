import React from "react";

const EducationSent = (props) => {

  return (
    <div>
      <h2>School: {props.school}</h2>
      <h3>Career: {props.career}</h3>
      <h3>Date: {props.date}</h3>
      <button onClick={() => props.editEducation()}>Edit</button>
    </div>
  )
}

export default EducationSent;