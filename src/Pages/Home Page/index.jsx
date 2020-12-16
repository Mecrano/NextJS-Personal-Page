import React from 'react';
import './styles.scss';

// Material UI
import Typography from '@material-ui/core/Typography';

// Custom Component
import Header from '../../components/Header';
import VideoBG from '../../components/VideoBG';
import TypeWriter from '../../components/TypeWriter';
import Parallax from '../../components/Parallax';
import SocialNetworks from '../../components/SocialNetworks';

// Config
import { parallaxData } from '../../config';

// Resources
import videoJumbotron from '../../Resources/videos/videoJumbotron.mp4';

const HomePage = () => (
    <>
        <Header />
        <VideoBG
            id="videoJumbotron"
            media={videoJumbotron}
            mediaType="video/mp4"
        >
            <TypeWriter titles={parallaxData.titles} />
            <Typography variant="body1" className="descriptionText">
                {parallaxData.description}
            </Typography>
            <SocialNetworks
                data={parallaxData.socialNetworks}
                className="socialNetworks"
            />
        </VideoBG>
        <Parallax id="home">
            <TypeWriter titles={parallaxData.titles} />
            <Typography variant="body1" className="descriptionText">
                {parallaxData.description}
            </Typography>
            <SocialNetworks
                data={parallaxData.socialNetworks}
                className="socialNetworks"
            />
        </Parallax>
    </>
);
export default HomePage;
