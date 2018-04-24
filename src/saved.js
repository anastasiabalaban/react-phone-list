import React, { Component } from 'react';
import Form from './form';
import PhoneList from './list';

export default class SavedNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
    this._save = this._save.bind(this)
  }
  _save(name, phone) {
    alert("Hello " + name + "!");
    this.setState({
      people: this.state.people.concat({name: name, phone: phone})
    });
  }
  render() {
    return (
      <div>
        <Form saving={this._save} />
        <PhoneList list={this.state.people} />
      </div>
    );
  }
}