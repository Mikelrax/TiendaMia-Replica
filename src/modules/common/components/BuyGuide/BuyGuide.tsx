import "./BuyGuide.css";

export default function BuyGuide() {
    return (
        <div className="buy-guide-container">
            <div className="steps-container">
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Select Product" />
                    <p>Select Product</p>
                    <p>Browse our catalog to find the product you need.</p>
                </div>
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Add to Cart" />
                    <p>Add to Cart</p>
                    <p>Click the 'Add to Cart' button to add the product to your shopping cart.</p>
                </div>
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Checkout" />
                    <p>Checkout</p>
                    <p>Proceed to checkout to complete your purchase.</p>
                </div>
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Receive Product" />
                    <p>Receive Product</p>
                    <p>Wait for your product to be delivered to your doorstep.</p>
                </div>
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Unbox Product" />
                    <p>Unbox Product</p>
                    <p>Carefully unbox your product and enjoy your purchase.</p>
                </div>
                <div className="step">
                    <img src="https://placehold.co/100x100" alt="Leave a Review" />
                    <p>Leave a Review</p>
                    <p>Share your experience by leaving a review on our website.</p>
                </div>
            </div>
        </div>
    )
}