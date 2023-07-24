import React from 'react';
import { Typography, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../themes/FooterStyles';
import footerLogo from '../assets/images/footerLogo.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import github from '../assets/images/github.svg';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstDiv}>
        <div className={classes.logoDiv}>
          <img src={footerLogo} alt="logo" />
          <Typography className={classes.logoText}>Landing Page Template by TOD</Typography>
        </div>
        <div className={classes.buttons}>
          <Typography className={classes.mainHeading}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text1}>Lorem Ipsum</Typography>
        </div>
        <div className={classes.buttons}>
          <Typography className={classes.mainHeading}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text1}>Lorem Ipsum</Typography>
        </div>
        <div className={classes.buttons}>
          <Typography className={classes.mainHeading}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text1}>Lorem Ipsum</Typography>
        </div>
        <div className={classes.buttons}>
          <Typography className={classes.mainHeading}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text}>Lorem Ipsum</Typography>
          <Typography className={classes.text1}>Lorem Ipsum</Typography>
        </div>
      </div>
      <div className={classes.socialDivMobile}>
        <img src={facebook} alt="facebook-logo" className={classes.Facebook} />
        <img src={twitter} alt="twitter-logo" className={classes.Twitter} />
        <img src={github} alt="github-logo" className={classes.Github} />
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.termsDiv}>
          <Typography className={classes.terms}>Terms of Service</Typography>
          <Typography className={classes.privacy}>Privacy Policy</Typography>
          <Typography className={classes.trust}>Trust & Safety</Typography>
        </div>
        <Typography className={classes.copyRights}>© 2021 Templateondemand.co</Typography>
      </div>
      <div className={classes.thirdDiv}>
        <div className={classes.socialDiv}>
          <img src={facebook} alt="facebook-logo" className={classes.Facebook} />
          <img src={twitter} alt="twitter-logo" className={classes.Twitter} />
          <img src={github} alt="github-logo" className={classes.Github} />
        </div>
        <div className={classes.textFieldDiv}>
          <Typography className={classes.language}>Language:</Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select value={0}>
              <MenuItem value={0}>EN</MenuItem>
              <MenuItem value={1}>FR</MenuItem>
              <MenuItem value={2}>ES</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Footer;
