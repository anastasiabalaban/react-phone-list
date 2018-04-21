import React, { Component } from 'react';

export default class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneList: [
        {
          name: "Anastasia",
          phone: "+380934878997"
        },
        {
          name: "Vlad",
          phone: "+380981112233"
        },
        {
          name: "Max",
          phone: "+380952229999"
        }
      ]
    }
  }
  delete() {
    alert("Someone want to delete this phone number");
  }
  render() {
    return (
      <div>
        <p>{this.props.name}: {this.props.phone}</p>
        <button type="button" onClick={this.delete}>Delete</button>
        <hr/>
        {
          this.state.phoneList.map (function (item) {
            return (
              <p>{item.name} : {item.phone}</p>
            );
          })
        }
      </div>
    );
  }
}
