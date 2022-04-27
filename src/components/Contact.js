import React from "react";

function Contact({ saveContact, name, email, phone }) {
  const refName = React.createRef();
  const refEmail = React.createRef();
  const refPhone = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      isSend: true,
      name: refName.current.value,
      email: refEmail.current.value,
      phone: refPhone.current.value,
    }
    
    saveContact(contact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" ref={refName} value={name ? name : null} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={refEmail} value={email ? email : null} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="number" ref={refPhone} value={phone ? phone : null} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact;