import React from 'react';
import './styles.scss';

// Material UI
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// Device detector
import { isMobile } from 'react-device-detect';

// Import menu data
import { MenuData } from '../../config';

const Header = () => (
    <AppBar position="fixed" className="mainNavBarTop" color="inherit">
        <Toolbar>
            {isMobile ? (
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            ) : (
                ''
            )}
            {MenuData.map((menu) => (
                <Typography variant="h4" key={menu.id}>
                    {menu.icon}
                    <Link href={menu.route}>{menu.name}</Link>
                </Typography>
            ))}
        </Toolbar>
    </AppBar>
);

export default Header;
