import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '176px',
    width: '1177px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '64px auto',
      width: '100%',
    },
  },
  hide: {
    display: 'none',
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    width: '1177px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      justifyContent: 'center',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '64px',
    fontWeight: '400',
    marginTop: '59px',
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      fontWeight: '700',
      marginTop: 0,
      marginLeft: 0,
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    width: '590px',
    marginTop: '45px',
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '308px',
      marginTop: '24px',
      marginLeft: 0,
      color: '#666666',
    },
  },
  txtDiv0: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  whiteEll: {
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  ImgBoxesDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    width: '1177px',
    marginTop: '43px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '343px',
    },
  },
  Box: {
    backgroundColor: '#EAEAEA !important',
  },
  Box1: {
    width: '528px',
    height: '178px',
    backgroundColor: '#fff',
    border: '1px solid #DFDFDF',
    marginTop: '26.5px',
    transition: 'all .2s',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      height: '202px',
      cursor: 'none',
    },
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '700',
    marginTop: '27.5px',
    marginLeft: '34px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '34px',
      marginLeft: '20px',
    },
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    width: '394px',
    marginTop: '27px',
    marginLeft: '34px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7px',
      marginLeft: '20px',
      width: '252px',
    },
  },
  speakerDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  speaker: {
    width: '32px',
    height: '32px',
    marginTop: '40px',
  },
  sun: {
    width: '32px',
    height: '32px',
    marginTop: '40px',
  },
  lock: {
    width: '22px',
    height: '32px',
    marginTop: '40px',
  },
  part2: {
    marginTop: '235px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
    },
  },
  heading1: {
    fontFamily: 'Roboto',
    fontSize: '64px',
    fontWeight: '400',
    marginLeft: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      fontWeight: '700',
      marginLeft: 0,
      textAlign: 'center',
    },
  },
  subText1: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    width: '590px',
    marginTop: '45px',
    marginLeft: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '308px',
      marginTop: '24px',
      marginLeft: 0,
      textAlign: 'center',
      color: '#666666',
    },
  },
  splashImg: {
    marginTop: '25px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '257px',
      objectFit: 'cover',
    },
  },
  lukeImg: {
    width: '57px',
    height: '57px',
  },
  maramImg: {
    width: '75px',
    height: '75px',
  },
  jacquelineImg: {
    width: '75px',
    height: '75px',
  },
  animationDiv: {
    position: 'relative',
  },
  personDivs: {
    position: 'absolute',
    transition: 'all .5s',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  p1_1: {
    top: '-30px',
    left: '70px',
  },
  p1_2: {
    top: '100px',
    left: '-20px',
  },
  p1_3: {
    top: '0px',
    left: '230px',
  },
  p2_1: {
    bottom: '-5px',
    left: '40px',
  },
  p2_2: {
    bottom: '85px',
    left: '-30px',
  },
  p2_3: {
    bottom: '45px',
    left: '-30px',
  },
  p3_1: {
    bottom: '230px',
    right: '-100px',
  },
  p3_2: {
    bottom: '30px',
    right: '-100px',
  },
  p3_3: {
    bottom: '130px',
    right: '-122px',
  },
  txtDiv: {
    width: '227px',
    height: '39px',
    border: '1px solid #DFDFDF',
    backgroundColor: '#fff',
    borderRadius: '6px',
    display: 'flex',
  },
  txtDiv1: {
    width: '225px',
    height: '39px',
    border: '1px solid #DFDFDF',
    backgroundColor: '#4C4C4C',
    borderRadius: '6px',
    display: 'flex',
  },
  txtWhite: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '700',
    marginLeft: '13px',
    marginTop: '6px',
    color: '#fff',
  },
  txt: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '700',
    marginLeft: '13px',
    marginTop: '6px',
  },
  txt1: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    marginLeft: '4px',
    marginTop: '6px',
    color: '#000000',
    opacity: '0.4',
  },
  txt12: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    marginLeft: '4px',
    marginTop: '6px',
    opacity: '50%',
    color: '#fff',
  },
}));

export default useStyles;
