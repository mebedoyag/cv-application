import React from "react";
import '../components.css';

class Job extends React.Component {
  refCompany = React.createRef();
  refPosition = React.createRef();
  refTasks = React.createRef();
  refStartDate = React.createRef();
  refEndDate = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      company: this.refCompany.current.value,
      position: this.refPosition.current.value,
      tasks: this.refTasks.current.value,
      startDate: this.refStartDate.current.value,
      endDate: this.refEndDate.current.value,
    }
    this.props.saveJob(job)
  }

  render() {
    const { company, position, tasks, startDate, endDate } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label htmlFor="company">Company: </label>
            <input type="text" id="company" ref={this.refCompany} value={company ? company : null} />
          </div>
          <div>
            <label htmlFor="position">Position: </label>
            <input type="text" id="position" ref={this.refPosition} value={position ? position : null} />
          </div>
          <div className="lab-tasks">
            <label  htmlFor="tasks">Tasks: </label>
            <textarea id="tasks" ref={this.refTasks} defaultValue={tasks ? tasks : null} ></textarea>
          </div>
          <div>
            <label htmlFor="dat1">Date Start: </label>
            <input type="date" id="dat1" ref={this.refStartDate} value={startDate ? startDate : null} />
          </div>
          <div>
            <label htmlFor="dat2">Date End: </label>
            <input type="date" id="dat2" ref={this.refEndDate} value={endDate ? endDate : null} />
          </div>
          {/* <button type="button">Edit</button> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Job;