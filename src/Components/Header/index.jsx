import React from "react";
import "./styles.scss";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

// Import menu data
import { MenuData } from "../../config";

const Header = () => (
    <AppBar position="fixed" className="mainNavBarTop" color="inherit">
        <Toolbar>
            {isMobile ? (
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            ) : (
                ""
            )}
            {MenuData.map(({ id, icon, route, name }) => (
                <Typography variant="h4" key={id}>
                    {icon}
                    <Link to={route} className={route === window.location.pathname ? "active" : ""}>
                        {name}
                    </Link>
                </Typography>
            ))}
        </Toolbar>
    </AppBar>
);

export default Header;
