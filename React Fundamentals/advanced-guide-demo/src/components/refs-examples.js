//Forwarding Refs
import React from "react";

//Accessing DOM Elements:

//You can use refs to directly access and manipulate DOM elements, such as form inputs or HTML elements.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myInputRef = React.createRef();
    }

    componentDidMount() {
        this.myInputRef.current.focus();
    }

    render() {
        return <input ref={this.myInputRef} />;
    }
}

//Integrating with Third-Party Libraries:

//When working with third-party libraries that need access to DOM elements, you can use refs to provide a reference to those elements.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myChartRef = React.createRef();
    }

    componentDidMount() {
        const chart = new ThirdPartyChartLibrary(this.myChartRef.current);
        chart.render();
    }

    render() {
        return <div ref={this.myChartRef} />;
    }
}

//Forwarding Refs:
//Accessing Child Component's DOM:
//You can use forwarding refs to access DOM elements within child components. This is helpful when you need to manipulate a child component's DOM from a parent component.
function ChildComponent(props, ref) {
    const innerElementRef = React.useRef();

    React.useImperativeHandle(ref, () => ({
        focusInnerElement: () => {
            innerElementRef.current.focus();
        },
    }));

    return <input ref={innerElementRef} />;
}

const ForwardedChildComponent = React.forwardRef(ChildComponent);

function ParentComponent() {
    const childRef = React.useRef();

    const handleClick = () => {
        childRef.current.focusInnerElement();
    };

    return (
        <div>
            <ForwardedChildComponent ref={childRef} />
            <button onClick={handleClick}>Focus Child Input</button>
        </div>
    );
}
/*
    In this example, the ForwardedChildComponent forwards a ref to the <input> element within the child component, and the parent component can access and manipulate that <input> element using the ref.
*/

//HOCs and Wrapped Components:
//Higher-Order Components (HOCs) can also benefit from forwarding refs. You can create an HOC that wraps a component and forwards a ref to it.
function withFocusOnMount(WrappedComponent) {
    return React.forwardRef((props, ref) => {
        const wrappedComponentRef = React.useRef();

        React.useImperativeHandle(ref, () => ({
            focusOnMount: () => {
                wrappedComponentRef.current.focus();
            },
        }));

        return <WrappedComponent ref={wrappedComponentRef} {...props} />;
    });
}

class MyComponent extends React.Component {
    render() {
        return <input />;
    }
}

const MyComponentWithFocus = withFocusOnMount(MyComponent);

function App() {
    const myComponentRef = React.useRef();

    const handleFocusClick = () => {
        myComponentRef.current.focusOnMount();
    };

    return (
        <div>
            <MyComponentWithFocus ref={myComponentRef} />
            <button onClick={handleFocusClick}>Focus on Mount</button>
        </div>
    );
}

/*
    In this example, the withFocusOnMount HOC forwards a ref to the wrapped component, allowing the parent component to trigger a focus action when necessary.
*/

//Integration with UI Libraries:

//When using UI libraries or components that expect refs to be passed directly, forwarding refs can help maintain a clean API.
