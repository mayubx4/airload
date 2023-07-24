import React from 'react';
import { Button, Typography } from '@material-ui/core';
import useStyles from '../themes/HomeHeroStyles';
import OrangeEllipse from '../assets/images/OrangeEllipse.png';
import Home from '../assets/images/Home.png';
import WhiteEllipse from '../assets/images/WhiteEllipse.png';
import Google from '../assets/images/google.svg';
import Philips from '../assets/images/Philips.svg';
import Intel from '../assets/images/Intel.svg';
import Slack from '../assets/images/slack.svg';
import Twililio from '../assets/images/twilio.svg';
import Notion from '../assets/images/notion.svg';
import Trello from '../assets/images/trello.svg';

const HomeHero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstDiv}>
        <Typography className={classes.heading}>
          Your Saas <span className={classes.orange}>Headline</span>
        </Typography>
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Button className={classes.btn}>Start your free trial</Button>
      </div>
      <div className={classes.secondDiv}>
        <img src={WhiteEllipse} alt="white" className={classes.whiteRound} />
        <img src={Home} alt="home" className={classes.homeImg} />
        <img src={OrangeEllipse} alt="orange-ellipse" className={classes.orangeRound} />
      </div>
      <Button className={classes.watchButton} variant="contained">
        Watch the full video (2 min)
      </Button>
      <div className={classes.brands}>
        <div className={classes.brandsDiv}>
          <img src={Google} alt="icon" className={classes.google} />
          <img src={Philips} alt="icon" className={classes.philip} />
          <img src={Intel} alt="icon" className={classes.intel} />
          <img src={Notion} alt="icon" className={classes.notion} />
        </div>
        <div className={classes.brandsDiv}>
          <img src={Notion} alt="icon" className={classes.notion1} />
          <img src={Slack} alt="icon" className={classes.slack} />
          <img src={Trello} alt="icon" className={classes.trello} />
          <img src={Twililio} alt="icon" className={classes.twililio} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
