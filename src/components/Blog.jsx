import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/BlogStyles';
import BlogEllipse from '../assets/images/BlogEllipse.png';
import SmallEllipse from '../assets/images/SmallEllipse.png';
import Blog1 from '../assets/images/Blog1.png';
import Blog2 from '../assets/images/Blog2.png';
import Blog3 from '../assets/images/Blog3.png';
import lucas from '../assets/images/lucas.png';
import matheus from '../assets/images/matheus.png';

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={BlogEllipse} alt="ellipse" className={classes.ellipse} />
      <div className={classes.textDiv}>
        <Typography className={classes.heading}>Lorem ipsum dolor</Typography>
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.blog}>
          <img src={Blog1} alt="blog-img" className={classes.blogImg} />
          <Typography className={classes.orangeButton}>Lorem ipsum</Typography>
          <Typography className={classes.blogPost}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod&quot;.
          </Typography>
          <div className={classes.authorDiv}>
            <img src={lucas} alt="lucas-icon" />
            <Typography className={classes.by}>By</Typography>
            <Typography className={classes.author}>Lorem ipsum</Typography>
          </div>
        </div>
        <div className={classes.blog}>
          <img src={Blog2} alt="blog-img" className={classes.blogImg} />
          <Typography className={classes.blueButton}>Lorem ipsum</Typography>
          <Typography className={classes.blogPost}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod&quot;.
          </Typography>
          <div className={classes.authorDiv}>
            <img src={matheus} alt="lucas-icon" />
            <Typography className={classes.by}>By</Typography>
            <Typography className={classes.author}>Lorem ipsum</Typography>
          </div>
        </div>
        <div className={classes.blog1}>
          <img src={Blog3} alt="blog-img" className={classes.blogImg} />
          <div className={classes.colorbtn}>
            <Typography className={classes.orangeButton}>Lorem ipsum</Typography>
            <Typography className={classes.blueButton1}>Lorem</Typography>
          </div>
          <Typography className={classes.blogPost}>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod&quot;.
          </Typography>
          <div className={classes.authorDiv}>
            <img src={lucas} alt="lucas-icon" />
            <Typography className={classes.by}>By</Typography>
            <Typography className={classes.author}>Lorem ipsum</Typography>
          </div>
        </div>
        <div className={classes.smallEllipse}>
          <img src={SmallEllipse} alt="ellipse" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
