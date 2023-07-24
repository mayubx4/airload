import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from '../themes/ReviewsStyles';
import BigEllipse from '../assets/images/BigEllipse.png';
import reviews from '../assets/images/reviews.png';
import ben from '../assets/images/ben.png';
import luke from '../assets/images/luke.png';
import jacqueline from '../assets/images/jacqueline.png';
import slack from '../assets/images/slack.svg';
import notion from '../assets/images/notion.svg';
import Uber from '../assets/images/Uber.svg';

const Reviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headingDiv}>
        <img src={BigEllipse} alt="ellipse" className={classes.ellipse} />
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet, consectetur</Typography>
      </div>
      <div className={classes.imgText}>
        <img src={reviews} alt="img" />
        <div className={classes.textDiv}>
          <Typography className={classes.subText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
          <Typography className={classes.link}>Lorem ipsum dolor</Typography>
        </div>
      </div>
      <div className={classes.paperDiv}>
        <Paper className={classes.paper} elevation={0}>
          <img src={luke} alt="luke-icon" className={classes.personIcon} />
          <Typography className={classes.text}>
            We have end-to-end solutions that can keep up with you and your standards.
          </Typography>
          <img src={Uber} alt="uber-logo" className={classes.logo} />
        </Paper>
        <Paper className={classes.paper} elevation={0}>
          <img src={ben} alt="luke-icon" className={classes.personIcon} />
          <Typography className={classes.text}>
            We have end-to-end solutions that can keep up with you and your standards.
          </Typography>
          <img src={slack} alt="uber-logo" className={classes.logoSlack} />
        </Paper>
        <Paper className={classes.paper} elevation={0}>
          <img src={jacqueline} alt="luke-icon" className={classes.personIcon1} />
          <Typography className={classes.text1}>
            We have end-to-end solutions that can keep up with you and your standards.
          </Typography>
          <img src={notion} alt="uber-logo" className={classes.logoNotion} />
        </Paper>
      </div>
    </div>
  );
};

export default Reviews;
