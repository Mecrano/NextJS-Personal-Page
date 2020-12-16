import React from 'react';
import './styles.scss';

const Parallax = (props) => {
    const { children, id } = props;

    return (
        <section className="mainParallax" id={id}>
            <div>{children}</div>
        </section>
    );
};

export default Parallax;
