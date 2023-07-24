import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from '../themes/CTAStyles';

const CTA = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textDiv}>
        <Typography className={classes.heading}>Lorem ipsum dolor</Typography>
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
      </div>
      <div className={classes.btnDiv}>
        <Button className={classes.btn}>Get started for free</Button>
      </div>
    </div>
  );
};

export default CTA;
