import React, { useState } from 'react';
import { Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../themes/StepsStyles';
import Tick from '../assets/images/Tick.png';
import orangeRound from '../assets/images/orangeRound.png';

const Steps = () => {
  const classes = useStyles();
  const [tick, setTick] = useState(0);
  const handleClick = t => {
    setTick(t);
  };
  return (
    <div className={classes.root}>
      <div className={classes.firstDiv}>
        <Typography className={classes.heading}>Lorem ipsum dolor</Typography>
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </div>
      <div className={classes.paperDiv}>
        <Paper
          onClick={() => {
            handleClick(0);
          }}
          className={clsx(classes.paper, { [classes.paperTick]: tick === 0 })}
        >
          <img src={Tick} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick !== 0 })} />
          <img src={orangeRound} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick === 0 })} />
          <Typography className={classes.mainHeading}>First Step</Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
        </Paper>
        <Paper
          onClick={() => {
            handleClick(1);
          }}
          className={clsx(classes.paper, { [classes.paperTick]: tick === 1 })}
        >
          <img src={Tick} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick !== 1 })} />
          <img src={orangeRound} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick === 1 })} />
          <Typography className={classes.mainHeading}>Second Step</Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
        </Paper>
        <Paper
          onClick={() => {
            handleClick(2);
          }}
          className={clsx(classes.paper, { [classes.paperTick]: tick === 2 })}
        >
          <img src={Tick} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick !== 2 })} />
          <img src={orangeRound} alt="tick-logo" className={clsx(classes.tickLogo, { [classes.hide]: tick === 2 })} />
          <Typography className={classes.mainHeading}>Third Step</Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Steps;
