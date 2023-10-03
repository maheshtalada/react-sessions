import React, { Component } from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";
import ComponentDidMountMethod from "./components/componentDidMount";
import ComponentWillUnmount from "./components/componentUnmount";

// examples
//https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <LifecycleA lifeCycle="mounting" isLoading={true} /> */}
                <ComponentWillUnmount />
                {/* <ComponentDidMountMethod /> */}
            </div>
        );
    }
}

export default App;
