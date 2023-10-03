import React, { Component } from "react";

export default class ComponentDidMountMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }));
    }

    render() {
        return (
            <div>
                <p>This will print all the name available in API users data</p>
                {this.state.data.map((d) => (
                    <h6 key={d.id}>{d.name}</h6>
                ))}
            </div>
        );
    }
}
