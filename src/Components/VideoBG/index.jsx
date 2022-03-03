import React from 'react';

import './styles.scss';

const VideoBG = (props) => {
    const { children, id, media, mediaType } = props;

    return (
        <section className="mainVideoBG" id={id}>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={media} type={mediaType} />
                    Your browser does not support the video tag
                </video>
            </div>
            <div className="VideoBG-content">
                <div>{children}</div>
            </div>
        </section>
    );
};

export default VideoBG;
