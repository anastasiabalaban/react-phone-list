import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
    this.addValues = this.addValues.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }
  addValues() {
    const name = this.state.name;
    const phone = this.state.phone;
    this.props.saving(name, phone);
    this.setState({ name: '', phone: '' });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  render() {
    const {name, phone} = this.state;
    const isEnabled = name.length > 0 && phone.length > 0;
    return (
      <div>
        <form>
          <label>
            Name:
            <input autoFocus type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            Phone:
            <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
          </label>
          <button type="button" className="button" onClick={this.addValues} disabled={!isEnabled}>Add to phone list</button>
        </form>
      </div>
    );
  }
}
