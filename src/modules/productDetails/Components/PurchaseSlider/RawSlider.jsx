import ImageGallery from "react-image-gallery";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import config from "../../../../../public/store-config.json";

const { SliderImages } = config;

const SliderRaw = () => {
    class MyGallery extends React.Component {
        render() {
            return <ImageGallery
                items={SliderImages}
                autoPlay={true}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                showThumbnails={false}
            />;
        }
    }

    return <MyGallery />;
};

export default SliderRaw;