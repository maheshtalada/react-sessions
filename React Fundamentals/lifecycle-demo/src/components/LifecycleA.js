import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Brillio",
            isLoading: props.isLoading,
        };
        console.log("LifecycleA constructor");
        this.timer = null;
    }

    // when we use redux ,  this method will be mostly
    static getDerivedStateFromProps(props, state) {
        //console.log(props, state);
        console.log("LifecycleA getDerivedStateFromProps");
        //return { isLoading: false };
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
        // make HTTP call to get some data
        // clearTimeout(this.timer);
        // this.timer = setTimeout(() => {
        //     this.setState({ isLoading: true, name: "comonent" });
        // }, 2000);

        // make an api call
    }

    // shouldComponentUpdate() {
    //     console.log("LifecycleA shouldComponentUpdate");
    //     return true;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("LifecycleA getSnapshotBeforeUpdate");
    //     return null;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "react",
        });
    };

    //showSomeData() {}

    render() {
        console.log("LifecycleA render");
        const { isLoading, name } = this.state;
        return (
            <>
                <button onClick={this.changeState}>Change state</button>
                {/* <LifecycleB /> */}
                {isLoading && <span>{name} </span>}
            </>
        );
    }
}

export default LifecycleA;
