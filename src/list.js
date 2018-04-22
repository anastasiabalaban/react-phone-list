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
  render() {
    let names = this.state.phoneList.concat(this.props.list).map(function (item) {
      return <li>{item.name} : {item.phone}</li>;
    });
    return (
      <div>
        <ol className="list">{names}</ol>
      </div>
    );
  }
}
