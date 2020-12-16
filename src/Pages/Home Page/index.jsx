import React from 'react';
import './styles.scss';

// Material UI
import Typography from '@material-ui/core/Typography';

// Custom Component
import Header from '../../Components/Header';
import VideoBG from '../../Components/VideoBG';
import TypeWriter from '../../Components/TypeWriter';
import Parallax from '../../Components/Parallax';
import SocialNetworks from '../../Components/SocialNetworks';

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
