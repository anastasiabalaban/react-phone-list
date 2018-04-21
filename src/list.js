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
    return (
      <div>
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
