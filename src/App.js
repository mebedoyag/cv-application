import React, { useState, useEffect } from 'react';
import './App.css';

import Contact from './components/Contact';
import Education from './components/Education';
import Job from './components/Job';
import ContactSent from './components/ContactSent';
import EducationSent from './components/EducaciotSent';
import JobSent from './components/JobSent';

// class App extends React.Component  {
//   state = {
//     contact: {
//       isSend: false,
//       name: "",
//       email: "",
//       phone: "",
//     },
//     education: {
//       isSend: false,
//       school: "",
//       career: "",
//       date: "",
//     },
//     job: {
//       isSend: false,
//       company: "",
//       position: "",
//       tasks: "",
//       startDate: "",
//       endDate: "",
//     }
//   }

//   modContact = (contact = this.state.contact) => {
//     const temp = this.state.contact.isSend ? false : true;
//     const copyContact = { ...this.state.contact, ...contact, isSend: temp };
//     this.setState({ contact: copyContact });
//   }

//   modEducation = (education = this.state.education) => {
//     const temp = this.state.education.isSend ? false : true;
//     const copyEducation = { ...this.state.education, ...education, isSend: temp };
//     this.setState({ education: copyEducation });
//   }

//   modJob = (job = this.state.job) => {
//     const temp = this.state.job.isSend ? false : true;
//     const copyJob = { ...this.state.job, ...job, isSend: temp };
//     this.setState({ job: copyJob });
//   }

//   render() {
//     return (
//       <>
//         <div className='wrapper'>
//           <h1>CV Application</h1>
//             <div className='container'>
//               {
//                 !this.state.contact.isSend ? 
//                   <Contact 
//                     saveContact={this.modContact} 
//                     name={this.state.contact.name} 
//                     email={this.state.contact.email} 
//                     phone={this.state.contact.phone} 
//                   /> : 
//                   <ContactSent 
//                     editContact={this.modContact} 
//                     name={this.state.contact.name} 
//                     email={this.state.contact.email} 
//                     phone={this.state.contact.phone} 
//                   />
//               }
//               {
//                 !this.state.education.isSend ? 
//                   <Education 
//                     saveEducation={this.modEducation} 
//                     editEducation ={this.modEducation}    
//                     school={this.state.education.school} 
//                     career={this.state.education.career} 
//                     date={this.state.education.date} 
//                   /> : 
//                   <EducationSent 
//                     editEducation ={this.modEducation}    
//                     school={this.state.education.school} 
//                     career={this.state.education.career} 
//                     date={this.state.education.date} 
//                   />
//               }
//               {
//                 !this.state.job.isSend ? 
//                   <Job 
//                     saveJob={this.modJob} 
//                     company={this.state.job.company} 
//                     position={this.state.job.position} 
//                     tasks={this.state.job.tasks} 
//                     startDate={this.state.job.startDate} 
//                     endDate={this.state.job.endDate}
//                   /> : 
//                   <JobSent  
//                     editJob={this.modJob} 
//                     company={this.state.job.company} 
//                     position={this.state.job.position} 
//                     tasks={this.state.job.tasks} 
//                     startDate={this.state.job.startDate} 
//                     endDate={this.state.job.endDate} 
//                   />
//               }
//             </div>
//         </div>
//       </>
//     );
//   }
// }

// export default App;


function App() {
  const [contact, setContact] = useState({
    isSend: false,
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    isSend: false,
    school: "",
    career: "",
    date: "",
  });

  const [job, setJob] = useState({
    editJob: false,
    company: "",
    position: "",
    tasks: "",
    startDate: "",
    endDate: "",
  })


  useEffect(() => {
    
  });

  const saveContact = (cont) => {
    setContact(cont)
  }

  const editContact = () => {
    const copy = { ...contact, isSend: false };
    setContact(copy);
  }

  const saveEducation = (cont) => {
    setEducation(cont)
  }

  const editEducation = () => {
    const copy = { ...education, isSend: false };
    setEducation(copy);
  }

  const saveJob = (cont) => {
    setJob(cont)
  }

  const editJob = () => {
    const copy = { ...job, isSend: false };
    setJob(copy);
  }

  return (
    <div className='wrapper'>
      <h1>CV Application</h1>
        <div className='container'>
          {!contact.isSend ? 
            <Contact 
              saveContact={saveContact} 
              name={contact.name} 
              email={contact.email} 
              phone={contact.phone} /> : 
            <ContactSent 
              editContact={editContact} 
              name={contact.name} 
              email={contact.email} 
              phone={contact.phone} />
          }
          {!education.isSend ? 
            <Education 
              saveEducation={saveEducation}   
              school={education.school} 
              career={education.career} 
              date={education.date} 
            /> : 
            <EducationSent 
              editEducation={editEducation}    
              school={education.school} 
              career={education.career} 
              date={education.date} 
            />
          }
          {!job.isSend ? 
            <Job 
              saveJob={saveJob}
              company={job.company} 
              position={job.position} 
              tasks={job.tasks} 
              startDate={job.startDate} 
              endDate={job.endDate}
            /> : 
            <JobSent  
              editJob={editJob} 
              company={job.company} 
              position={job.position} 
              tasks={job.tasks} 
              startDate={job.startDate} 
              endDate={job.endDate} 
            />
          }
        </div>
    </div>
  );
}

export default App;