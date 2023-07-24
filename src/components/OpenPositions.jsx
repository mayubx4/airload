import React from 'react';
import { Typography, Paper, Select, Link } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../themes/OpenPositionsStyles';

const OpenPositions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstDiv}>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet, consectetur</Typography>
        <div className={classes.textFieldDiv}>
          <Typography className={classes.categories}>Categories:</Typography>
          <FormControl className={classes.formControl}>
            <Select value={0}>
              <MenuItem value={0}>Technology</MenuItem>
              <MenuItem value={1}>Design</MenuItem>
              <MenuItem value={2}>Engineering</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.firstCol}>
          <Paper elevation={0} className={classes.paper}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper0}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper1}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.txt1}>Remote</Typography>
            <Typography className={classes.subText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
            </Typography>
            <Typography className={classes.apply}>Apply Now</Typography>
          </Paper>
          <div className={classes.allCategories1}>
            <Typography className={classes.number}>+28</Typography>
            <Link href="/" className={classes.seeAll}>
              See all open positions
            </Link>
          </div>
        </div>
        <div className={classes.secondCol}>
          <Paper elevation={0} className={classes.paper}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper2}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper2}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
        </div>
        <div className={classes.thirdCol}>
          <Paper elevation={0} className={classes.paper}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Adobe</Typography>
              <Typography className={classes.time1}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <Paper elevation={0} className={classes.paper2}>
            <div className={classes.paperText}>
              <Typography className={classes.title}>Senior Front End Developer</Typography>
              <Typography className={classes.time}>3 days ago</Typography>
            </div>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography className={classes.txt}>Remote</Typography>
          </Paper>
          <div className={classes.allCategories}>
            <Typography className={classes.number}>+28</Typography>
            <Link href="/" className={classes.seeAll}>
              See all open positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
