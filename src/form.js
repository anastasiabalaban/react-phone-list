import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
    this.addValues = this.addValues.bind(this);
  }
  addValues() {
    this.props.saving(this.state.name, this.state.phone);
    this.setState({ name: '', phone: '' });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input autoFocus type="text" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
          </label>
          <label>
            Phone:
            <input type="text" value={this.state.phone} onChange={event => this.setState({phone: event.target.value})}/>
          </label>
          <button type="button" className="button" onClick={this.addValues} disabled={!this.state.name || !this.state.phone}>Add to phone list</button>
        </form>
      </div>
    );
  }
}
