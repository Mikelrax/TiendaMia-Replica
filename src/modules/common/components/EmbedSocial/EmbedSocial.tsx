import "./EmbedSocial.css";

const EmbedSocial = () => {
    return (
        <div className="embedsocial-reviews-container">
            <iframe
                src="https://embedsocial.com/api/reviews/widget/6ca09d82f91ebee3831c2f846e3f03c2b81baf39/"
                id="embedIFrame_6ca09d82f91ebee3831c2f846e3f03c2b81baf39zogcg"
                className="embedsocial-reviews-iframe"
                title="EmbedReviews widget"
                scrolling="no"
                frameBorder="0"
                width={"70%"}
                height={"500px"}
            />
        </div>
    )
}

export default EmbedSocial;