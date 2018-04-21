import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.save = this.save.bind(this)
  }
  save() {
    let name = this.nameInput.current.value;
    let phone = this.phoneInput.current.value;
    alert("Hello " + name + "!");
    this.setState({
      people: this.state.people.concat({name: name, phone: phone})
    });
  }
  render() {
    let names = this.state.people.map(function (item) {
      return <li>{item.name} : {item.phone}</li>;
    });
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
          <button type="button" className="button" onClick={this.save}>Add to phone list</button>
        </form>
        <ol className="list">{names}</ol>
      </div>
    );
  }
}
