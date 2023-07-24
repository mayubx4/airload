import React, { useState } from 'react';
import { Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from '../themes/ProsStyles';
import WhiteEllipse from '../assets/images/WhiteEllipse.png';
import unsplash from '../assets/images/unsplash.png';
import speaker from '../assets/images/Speaker.png';
import unsplash1 from '../assets/images/unsplash1.png';
import sun from '../assets/images/Sun.png';
import unsplash2 from '../assets/images/unsplash2.png';
import lock from '../assets/images/Lock.png';
import luke from '../assets/images/luke.png';
import jacqueline from '../assets/images/jacqueline.png';
import maram from '../assets/images/maram.png';

const Pros = () => {
  const classes = useStyles();
  const [click1, setClick1] = useState(0);
  const [click2, setClick2] = useState(0);
  const [click3, setClick3] = useState(0);
  const handleClick1 = c => {
    setClick1(c);
  };
  const handleClick2 = c => {
    setClick2(c);
  };
  const handleClick3 = c => {
    setClick3(c);
  };

  return (
    <div className={classes.root}>
      <div className={classes.part1}>
        <div className={classes.textDiv}>
          <div className={classes.txtDiv0}>
            <Typography className={classes.heading}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </div>
          <div>
            <img src={WhiteEllipse} alt="white-ellipse" className={classes.whiteEll} />
          </div>
        </div>
        <div className={classes.ImgBoxesDiv}>
          <div>
            <Paper
              onClick={() => {
                handleClick1(0);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click1 === 0 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img
                  src={speaker}
                  alt="speaker-icon"
                  className={clsx(classes.speaker, { [classes.hide]: click1 !== 0 })}
                />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick1(1);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click1 === 1 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img
                  src={speaker}
                  alt="speaker-icon"
                  className={clsx(classes.speaker, { [classes.hide]: click1 !== 1 })}
                />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick1(2);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click1 === 2 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img
                  src={speaker}
                  alt="speaker-icon"
                  className={clsx(classes.speaker, { [classes.hide]: click1 !== 2 })}
                />
              </div>
            </Paper>
          </div>
          <div className={classes.animationDiv}>
            <img
              src={unsplash}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click1 !== 0 })}
            />
            <img
              src={unsplash1}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click1 !== 1 })}
            />
            <img
              src={unsplash2}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click1 !== 2 })}
            />
            <div
              className={clsx(classes.personDivs, {
                [classes.p1_1]: click1 === 0,
                [classes.p1_2]: click1 === 1,
                [classes.p1_3]: click1 === 2,
              })}
            >
              <img src={luke} alt="luke-img" className={classes.lukeImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p2_1]: click1 === 0,
                [classes.p2_2]: click1 === 1,
                [classes.p2_3]: click1 === 2,
              })}
            >
              <img src={maram} alt="maram-img" className={classes.maramImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p3_1]: click1 === 0,
                [classes.p3_2]: click1 === 1,
                [classes.p3_3]: click1 === 2,
              })}
            >
              <img src={jacqueline} alt="jacqueline-img" className={classes.jacquelineImg} />
              <div className={classes.txtDiv1}>
                <Typography className={classes.txtWhite}>John Doe</Typography>
                <Typography className={classes.txt12}>requested access.</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.textDiv}>
          <div>
            <Typography className={classes.heading1}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </div>
        </div>
        <div className={classes.ImgBoxesDiv}>
          <div className={classes.animationDiv}>
            <img
              src={unsplash1}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click2 !== 0 })}
            />
            <img
              src={unsplash}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click2 !== 1 })}
            />
            <img
              src={unsplash2}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click2 !== 2 })}
            />
            <div
              className={clsx(classes.personDivs, {
                [classes.p1_1]: click2 === 0,
                [classes.p1_2]: click2 === 1,
                [classes.p1_3]: click2 === 2,
              })}
            >
              <img src={luke} alt="luke-img" className={classes.lukeImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p2_1]: click2 === 0,
                [classes.p2_2]: click2 === 1,
                [classes.p2_3]: click2 === 2,
              })}
            >
              <img src={maram} alt="maram-img" className={classes.maramImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p3_1]: click2 === 0,
                [classes.p3_2]: click2 === 1,
                [classes.p3_3]: click2 === 2,
              })}
            >
              <img src={jacqueline} alt="jacqueline-img" className={classes.jacquelineImg} />
              <div className={classes.txtDiv1}>
                <Typography className={classes.txtWhite}>John Doe</Typography>
                <Typography className={classes.txt12}>requested access.</Typography>
              </div>
            </div>
          </div>
          <div>
            <Paper
              onClick={() => {
                handleClick2(0);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click2 === 0 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={sun} alt="speaker-icon" className={clsx(classes.sun, { [classes.hide]: click2 !== 0 })} />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick2(1);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click2 === 1 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={sun} alt="speaker-icon" className={clsx(classes.sun, { [classes.hide]: click2 !== 1 })} />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick2(2);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click2 === 2 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={sun} alt="speaker-icon" className={clsx(classes.sun, { [classes.hide]: click2 !== 2 })} />
              </div>
            </Paper>
          </div>
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.textDiv}>
          <div>
            <Typography className={classes.heading1}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </div>
        </div>
        <div className={classes.ImgBoxesDiv}>
          <div>
            <Paper
              onClick={() => {
                handleClick3(0);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click3 === 0 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={lock} alt="speaker-icon" className={clsx(classes.lock, { [classes.hide]: click3 !== 0 })} />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick3(1);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click3 === 1 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={lock} alt="speaker-icon" className={clsx(classes.lock, { [classes.hide]: click3 !== 1 })} />
              </div>
            </Paper>
            <Paper
              onClick={() => {
                handleClick3(2);
              }}
              className={clsx(classes.Box1, { [classes.Box]: click3 === 2 })}
              elevation={0}
            >
              <Typography className={classes.title}>First feature</Typography>
              <div className={classes.speakerDiv}>
                <Typography className={classes.subTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <img src={lock} alt="speaker-icon" className={clsx(classes.lock, { [classes.hide]: click3 !== 2 })} />
              </div>
            </Paper>
          </div>
          <div className={classes.animationDiv}>
            <img
              src={unsplash2}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click3 !== 0 })}
            />
            <img
              src={unsplash}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click3 !== 1 })}
            />
            <img
              src={unsplash1}
              alt="unsplash-img"
              className={clsx(classes.splashImg, { [classes.hide]: click3 !== 2 })}
            />
            <div
              className={clsx(classes.personDivs, {
                [classes.p1_1]: click3 === 0,
                [classes.p1_2]: click3 === 1,
                [classes.p1_3]: click3 === 2,
              })}
            >
              <img src={luke} alt="luke-img" className={classes.lukeImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p2_1]: click3 === 0,
                [classes.p2_2]: click3 === 1,
                [classes.p2_3]: click3 === 2,
              })}
            >
              <img src={maram} alt="maram-img" className={classes.maramImg} />
              <div className={classes.txtDiv}>
                <Typography className={classes.txt}>John Doe</Typography>
                <Typography className={classes.txt1}>requested access.</Typography>
              </div>
            </div>
            <div
              className={clsx(classes.personDivs, {
                [classes.p3_1]: click3 === 0,
                [classes.p3_2]: click3 === 1,
                [classes.p3_3]: click3 === 2,
              })}
            >
              <img src={jacqueline} alt="jacqueline-img" className={classes.jacquelineImg} />
              <div className={classes.txtDiv1}>
                <Typography className={classes.txtWhite}>John Doe</Typography>
                <Typography className={classes.txt12}>requested access.</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pros;
