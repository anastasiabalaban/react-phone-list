import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.addValues = this.addValues.bind(this)
  }
  addValues() {
    let name = this.nameInput.current.value;
    let phone = this.phoneInput.current.value;
    this.props.saving(name, phone);
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" ref={this.nameInput} />
          </label>
          <label>
            Phone:
            <input type="text" ref={this.phoneInput} />
          </label>
          <button type="button" className="button" onClick={this.addValues}>Add to phone list</button>
        </form>
      </div>
    );
  }
}
