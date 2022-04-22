import React from "react";

class EducationSent extends React.Component {


  render() {
    return (
    <div>
      <h2>School: {this.props.school}</h2>
      <h3>Career: {this.props.career}</h3>
      <h3>Date: {this.props.date}</h3>
      <button onClick={() => this.props.editEducation()}>Edit</button>
    </div>
    )
  }
}

export default EducationSent;