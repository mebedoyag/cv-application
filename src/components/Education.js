import React from "react";

const Education = (props) => {
  const refSchool = React.createRef();
  const refCareer = React.createRef();
  const refDate = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const education = {
      isSend: true,
      school: refSchool.current.value,
      career: refCareer.current.value,
      date: refDate.current.value,
    }
    props.saveEducation(education)
  }

  const { school, career, date } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="school">School: </label>
          <input type="text" id="school" ref={refSchool} value={school ? school : null} />
        </div>
        <div>
          <label htmlFor="career">Career: </label>
          <input type="text" id="career" ref={refCareer} value={career ? career : null} />
        </div>
        <div>
          <label htmlFor="dat">Date: </label>
          <input type="date" id="dat" ref={refDate} value={date ? date : null} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Education;