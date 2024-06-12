import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const SliderRaw = ( { img } ) => {
    const images = [{
        original: img,
        thumbnail: img
    }]
    class MyGallery extends React.Component {
        render() {
            return <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={true}
                showBullets={false}
                showThumbnails={true}
                thumbnailPosition="left"
            />;
        }
    }
    return <MyGallery />;
};

export default SliderRaw;