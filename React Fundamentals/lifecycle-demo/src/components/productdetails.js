import React, { Component } from "react";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
        };
    }

    componentDidMount() {
        // Simulate fetching product data from an API
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ productData: data });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        // Check if the product ID has changed
        if (this.props.productId !== prevProps.productId) {
            // Simulate fetching updated product data when productId prop changes
            fetch(`https://dummyjson.com/products/${this.props.productId}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ productData: data });
                });
        }
    }

    componentWillUnmount() {
        // Cleanup any resources if necessary
        // For example, close any open connections or subscriptions
    }

    render() {
        const { productData } = this.state;

        if (!productData) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{productData.name}</h2>
                <p>{productData.description}</p>
                <p>Price: ${productData.price}</p>
                <button onClick={this.getNext}> Next</button>
            </div>
        );
    }
}

export default ProductDetails;
