import React from "react";

class JobSent extends React.Component {


  render() {
    return (
      <div>
        <h2>Company: {this.props.company}</h2>
        <h3>Position: {this.props.position}</h3>
        <h3>Tasks: {this.props.tasks}</h3>
        <h3>Date 1: {this.props.startDate}</h3>
        <h3>Date 2: {this.props.endDate}</h3>
        <button onClick={() => this.props.editJob()}>Edit</button>
      </div>
    )
  }
}

export default JobSent;