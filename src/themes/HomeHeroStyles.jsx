import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '64.44px',
    [theme.breakpoints.down('sm')]: {
      margin: '26.01px auto 0',
      width: '343px',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '64px',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
  },
  orange: {
    color: '#FF4C2A',
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    width: '570px',
    marginTop: '27px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      marginTop: '31px',
      width: '343px',
    },
  },
  btn: {
    width: '335px',
    height: '48px',
    backgroundColor: '#FF4C2A',
    textTransform: 'none',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    marginTop: '39px',
    '&:hover': {
      backgroundColor: '#FF4C2A',
    },
  },
  secondDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '1342px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
    },
  },
  whiteRound: {
    marginTop: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  homeImg: {
    width: '943px',
    height: '563px',
    zIndex: '2',
    marginLeft: '64px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      marginLeft: 0,
    },
  },
  orangeRound: {
    position: 'relative',
    top: '-300px',
    right: '94px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  brands: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '1122px',
    marginTop: '-60px',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      flexDirection: 'column',
      marginTop: 0,
    },
  },
  brandsDiv: {
    display: 'flex',
  },
  google: {
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  philip: {
    marginLeft: '55px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '32.96px',
    },
  },
  intel: {
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '32.36px',
    },
  },
  notion: {
    marginLeft: '55px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      display: 'none',
    },
  },
  notion1: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginTop: '37.23px',
      marginLeft: '10px',
    },
  },
  slack: {
    marginRight: '45px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '23.09px',
      marginTop: '37.23px',
      marginRight: 0,
    },
  },
  twililio: {
    marginLeft: '45px',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      display: 'none',
    },
  },
  trello: {
    marginLeft: '5px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '23.64px',
      marginTop: '37.23px',
    },
  },
  watchButton: {
    width: '277px',
    height: '56px',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    backgroundColor: '#fff',
    textTransform: 'none',
    borderRadius: '30px',
    position: 'relative',
    bottom: '90px',
    zIndex: '2',
    right: '30px',
    '&:hover': {
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
      bottom: '50px',
    },
  },
}));

export default useStyles;
