import React, { Component } from 'react';
import Form from './form';
import PhoneList from './list';

export default class SavedNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
    this.save = this.save.bind(this)
  }
  save(name, phone) {
    this.setState({
      people: this.state.people.concat({name: name, phone: phone})
    });
  }
  render() {
    return (
      <div>
        <Form saving={this.save} />
        <PhoneList list={this.state.people} />
      </div>
    );
  }
}