import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this._addValues = this._addValues.bind(this)
  }
  _addValues() {
    let name = this.nameInput.current.value;
    let phone = this.phoneInput.current.value;
    this.props.saving(name, phone);
  }
  componentDidUpdate(){
    this.phoneInput.current.value = '';
    this.phoneInput.current.focus();
    this.nameInput.current.value = '';
    this.nameInput.current.focus();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input autoFocus type="text" ref={this.nameInput} />
          </label>
          <label>
            Phone:
            <input type="text" ref={this.phoneInput} />
          </label>
          <button type="button" className="button" onClick={this._addValues}>Add to phone list</button>
        </form>
      </div>
    );
  }
}
