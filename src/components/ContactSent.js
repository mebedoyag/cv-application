import React from "react";

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