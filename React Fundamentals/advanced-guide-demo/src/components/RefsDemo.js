import React, { Component, createRef } from "react";

export class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
        // this.cbRef = null;
        // this.setCbRef = (element) => {
        //     this.cbRef = element;
        // };
    }

    componentDidMount() {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        //console.log(this.inputRef, this.inputRef.current);
        this.inputRef.current.focus();
        //alert(this.inputRef.current.value);
    };

    // componentDidUpdate() {
    //     console.log("component updated");
    // }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;
