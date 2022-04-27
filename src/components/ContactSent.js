import React from "react";

// class ContactSent extends React.Component {


  // render() {
  //   return (
  //     <div>
  //       <h2>Name: {this.props.name}</h2>
  //       <h3>Email: {this.props.email}</h3>
  //       <h3>Phone: {this.props.phone}</h3>
  //       <button onClick={() => this.props.editContact()}>Edit</button>
  //     </div>
  //   )
  // }
// }

// export default ContactSent;

function ContactSent(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <button onClick={() => props.editContact()}>Edit</button>
    </div>
  )
}

export default ContactSent;