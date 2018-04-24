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
      ],
      showContacts: true
    }
  }
  render() {
    let names = this.state.phoneList.concat(this.props.list).map(function (item) {
      return <li>{item.name} : {item.phone}<button type="button" class="btn-close">x</button></li>;
    });
    let contactNodes;
    let buttonText = "Show contacts";
    if (this.state.showContacts) {
      contactNodes = <ol className="list">{names}</ol>;
      buttonText = "Hide contacts";
    }
    return (
      <div>
        <button type="button" className="button" onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {contactNodes}
        <p>There are {names.length} contacts in the list.</p>
      </div>
    );
  }
  _handleClick() {
    this.setState ({
      showContacts: !this.state.showContacts
    });
  }
}
