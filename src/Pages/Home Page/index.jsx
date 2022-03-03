import React from 'react';
import './styles.scss';

// Material UI
import Typography from '@material-ui/core/Typography';
import Particles from 'react-tsparticles';

import particlesOptions from './particles';
// Custom Component
import Header from '../../Components/Header';
// import VideoBG from '../../Components/VideoBG';
import TypeWriter from '../../Components/TypeWriter';
import SocialNetworks from '../../Components/SocialNetworks';

// Config
import { parallaxData } from '../../config';

const HomePage = () => (
    <>
        <Particles id="tsparticles" options={particlesOptions} />
        <div className="body">
            <Header />
            <section className="main">
                <div>
                    <TypeWriter titles={parallaxData.titles} />
                    <Typography variant="body1" className="descriptionText">
                        {parallaxData.description}
                    </Typography>
                    <SocialNetworks
                        data={parallaxData.socialNetworks}
                        className="socialNetworks"
                    />
                </div>
            </section>
        </div>
    </>
);
export default HomePage;
