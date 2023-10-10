import React, { Component } from "react";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            products: [
                { id: 1, name: "Product 1", price: 10 },
                { id: 2, name: "Product 2", price: 20 },
                { id: 3, name: "Product 3", price: 30 },
            ],
        };
    }

    componentDidMount() {
        // Simulate fetching product data from an API
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ products: data.products });
            });

        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            this.setState({ cart: JSON.parse(savedCart) });
        }
    }

    // componentDidMount() {
    //     // Load cart data from localStorage
    //     const savedCart = localStorage.getItem("cart");
    //     if (savedCart) {
    //         this.setState({ cart: JSON.parse(savedCart) });
    //     }
    // }

    componentDidUpdate() {
        console.log("added item to cart");
        // Update localStorage when cart state changes
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }

    addToCart(product) {
        console.log("product", product, "old cart", this.state.cart);
        this.setState((prevState) => ({
            cart: [...prevState.cart, product],
        }));
    }

    removeFromCart(product) {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((item) => item.id !== product.id),
        }));
    }

    calculateTotal() {
        const { cart } = this.state;
        return cart.reduce((total, item) => total + item.price, 0);
    }

    render() {
        const { cart, products } = this.state;

        return (
            <div>
                <h2>Shopping Cart</h2>
                <div>
                    <h3>Products</h3>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <a href={`/${product.id}`}>
                                    {product.title} - ${product.price}
                                </a>
                                <button onClick={() => this.addToCart(product)}>
                                    Add to Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Cart</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - ${item.price}
                                <button
                                    onClick={() => this.removeFromCart(item)}
                                >
                                    Remove from Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${this.calculateTotal()}</p>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
