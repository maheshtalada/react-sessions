import React, { Component, PureComponent } from "react";
import Input from "./Input";

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        console.log(this.componentRef.current);
        console.log(this.componentRef);
        this.componentRef.current.focusInput();
    };

    componentDidUpdate() {
        console.log("component updated");
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusInput;
