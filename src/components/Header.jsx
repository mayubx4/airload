import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from '../themes/HeaderStyles';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img src={logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.buttonDiv}>
            <div className={classes.btnsDiv}>
              <Button disableTouchRipple className={classes.btn}>
                Pricing
              </Button>
              <Button disableTouchRipple className={classes.btnAbout}>
                About us
              </Button>
              <Button disableTouchRipple className={classes.btn}>
                Blog
              </Button>
            </div>
          </div>
          <div className={classes.buttonDiv}>
            <Button disableTouchRipple className={classes.signInBtn}>
              Sign in
            </Button>
            <Button disableTouchRipple className={classes.getStartedBtn}>
              Get Started
            </Button>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.menu, { [classes.hide]: open })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerClose}
            className={clsx(classes.menuClear, { [classes.hide]: !open })}
          >
            <ClearIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        className={classes.drawer}
        anchor="top"
        open={open}
        onChange={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <List className={classes.lists}>
          <ListItem button key="Pricing">
            <ListItemText primary="Pricing" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="About us">
            <ListItemText primary="About us" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="Blog">
            <ListItemText primary="Blog" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="Sign In">
            <ListItemText primary="Sign In" className={classes.listBtn} />
          </ListItem>
          <ListItem>
            <Button className={classes.gettingStartedBtn} disableTouchRipple>
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
