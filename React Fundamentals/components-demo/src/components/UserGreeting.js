/*
  If/else
  Element variables
  Ternary conditional operator
  Short circuit operator
*/

import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }

    // #if-else approach
    // render() {
    //   if (this.state.isLoggedIn) {
    //     return <div>Welcome Brillio</div>
    //   } else {
    //     return <div>Welcome Guest</div>
    //   }
    // }

    // #element-variables approach
    // render() {
    //   let message
    //   if (this.state.isLoggedIn) {
    //     message = <div>Welcome Brillio</div>
    //   } else {
    //     message = <div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>
    // }

    // #ternary-operator-approach
    // render() {
    //   return this.state.isLoggedIn ? (
    //     <div>Welcome Brillio</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   )
    // }

    // #short-circuit-operator-approach
    render() {
        return this.state.isLoggedIn && <div>Welcome Brillio</div>;
    }
}

export default UserGreeting;
