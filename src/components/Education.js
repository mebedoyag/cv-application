import React from "react";

class Education extends React.Component {
  refSchool = React.createRef();
  refCareer = React.createRef();
  refDate = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const education = {
      school: this.refSchool.current.value,
      career: this.refCareer.current.value,
      date: this.refDate.current.value,
    }
    this.props.saveEducation(education)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label htmlFor="school">School: </label>
            <input type="text" id="school" ref={this.refSchool} />
          </div>
          <div>
            <label htmlFor="career">Career: </label>
            <input type="text" id="career" ref={this.refCareer} />
          </div>
          <div>
            <label htmlFor="dat">Date: </label>
            <input type="date" id="dat" ref={this.refDate} />
          </div>
          {/* <button type="button">Edit</button> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Education;