import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput() {
        alert("dddddd");
    }

    render() {
        return (
            <div>
                <span>color</span>
                <span>size</span>
            </div>
        );
    }
}

export default Input;
