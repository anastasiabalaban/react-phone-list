import React, { Component } from 'react';

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContacts: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState ({
      showContacts: !this.state.showContacts
    });
  }
  render() {
    let contacts = this.props.list.map((item, index) => (
      <li>{item.name} : {item.phone}<button type="button" class="btn-close" onClick={() => (this.props.delete(index))}>x</button></li>
    ));
    let contactNodes;
    let buttonText = "Show contacts";
    if (this.state.showContacts) {
      contactNodes = <ol className="list">{contacts}</ol>;
      buttonText = "Hide contacts";
    }
    return (
      <div>
        <button type="button" className="button" onClick={this.handleClick}>{buttonText}</button>
        {contactNodes}
        <p>There are {contacts.length} contacts in the list.</p>
      </div>
    );
  }
}
