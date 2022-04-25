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
    const { name, email, phone } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" ref={this.refName} value={name ? name : null} />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={this.refEmail} value={email ? email : null} />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="number" ref={this.refPhone} value={phone ? phone : null} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Contact;