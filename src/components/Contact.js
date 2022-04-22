import React from "react";

class Contact extends React.Component {
  refName = React.createRef();
  refEmail = React.createRef();
  refPhone = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.refName.current.value,
      email: this.refEmail.current.value,
      phone: this.refPhone.current.value,
    }
    
    this.props.saveContact(contact)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" ref={this.refName} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={this.refEmail} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="number" ref={this.refPhone} />
        </div>
        {/* <button type="button">Edit</button> */}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Contact;