import React from 'react';
import './styles.scss';

const VideoBG = (props) => {
    const { children, id, media, mediaType } = props;

    return (
        <section className="mainVideoBG" id={id}>
            <div className="video-background">
                <video src={media} type={mediaType} autoPlay loop>
                    <source />
                    <track kind="captions" />
                </video>
            </div>
            <div className="VideoBG-content">
                <div>{children}</div>
            </div>
        </section>
    );
};

export default VideoBG;
