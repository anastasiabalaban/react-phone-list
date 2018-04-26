import React, { Component } from 'react';
import Form from './form';
import PhoneList from './list';
import contacts from './mock-list';

export default class SavedNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: contacts
    }
    this.save = this.save.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  save(name, phone) {
    this.setState({
      people: this.state.people.concat({name: name, phone: phone})
    });
  }
  deleteContact(id) {
    const contacts = [...this.state.people];
    if (window.confirm('Are you sure?')) {
      contacts.splice(id, 1);
      this.setState({ people: contacts });
    }
  }
  render() {
    return (
      <div>
        <Form saving={this.save} />
        <PhoneList list={this.state.people} delete={this.deleteContact} />
      </div>
    );
  }
}