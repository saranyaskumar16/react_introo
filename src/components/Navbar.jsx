import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      static getDerivedStateFromProps(props, state) {
    //   setTimeout(() => {
           return {favoritecolor: props.favcol };
        // }, 1000)
       
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
}

export default Navbar