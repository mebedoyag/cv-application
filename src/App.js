import React from 'react';
import './App.css';

import Contact from './components/Contact';
import Education from './components/Education';
import Job from './components/Job';
import ContactSent from './components/ContactSent';
import EducationSent from './components/EducaciotSent';
import JobSent from './components/JobSent';

class App extends React.Component  {
  state = {
    contact: {
      isEditing: false,
      isSend: false,
      name: "",
      email: "",
      phone: "",
    },
    education: {
      isSend: false,
      school: "",
      career: "",
      date: "",
    },
    job: {
      isSend: false,
      company: "",
      position: "",
      tasks: "",
      startDate: "",
      endDate: "",
    }
  }

  saveContact = contact => {
    const temp = this.state.contact.isSend ? false : true;
    const copyContact = { ...this.state.contact, ...contact, isSend: temp };
    this.setState({ contact: copyContact });
  }

  editContact = () => {
    const temp = this.state.contact.isSend ? false : true;
    const copyContact = { ...this.state.contact, isSend: temp };
    this.setState({ contact: copyContact });
  }

  saveEducation = education => {
    const copyEducation = { ...this.state.education, ...education, isSend: true };
    this.setState({ education: copyEducation });
  }

  editEducation = () => {
    const temp = this.state.education.isSend ? false : true;
    const copyEdu = { ...this.state.education, isSend: temp };
    this.setState({ education: copyEdu });
  }

  saveJob = job => {
    const copyJob = { ...this.state.job, ...job, isSend: true };
    this.setState({ job: copyJob });
  }

  editJob = () => {
    const temp = this.state.job.isSend ? false : true;
    const copyJob = { ...this.state.job, isSend: temp };
    this.setState({ job: copyJob });
  }

  render() {
    return (
      <>
        <div className='wrapper'>
          <h1>CV Application</h1>
            <div className='container'>
              {
                !this.state.contact.isSend ? <Contact saveContact={this.saveContact} /> : <ContactSent editContact={this.editContact} name={this.state.contact.name} email={this.state.contact.email} phone={this.state.contact.phone} />
              }
              {
                !this.state.education.isSend ? <Education saveEducation={this.saveEducation} /> : <EducationSent editEducation ={this.editEducation} school={this.state.education.school} career={this.state.education.career} date={this.state.education.date} />
              }
              {
                !this.state.job.isSend ? <Job saveJob={this.saveJob} /> : <JobSent editJob={this.editJob} company={this.state.job.company} position={this.state.job.position} tasks={this.state.job.tasks} startDate={this.state.job.startDate} endDate={this.state.job.endDate} />
              }

            </div>
        </div>

        {/* <button onClick={this.handleClick}>Edit</button> */}
      </>
    );
  }
}

export default App;
