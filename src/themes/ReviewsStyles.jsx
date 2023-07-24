import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '1215px',
    margin: '104px auto 0',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      margin: '89px auto 0',
    },
  },
  ellipse: {
    marginLeft: '-30px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  headingDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '400',
    marginTop: '126px',
    marginLeft: '-40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      marginLeft: 0,
      marginTop: 0,
      textAlign: 'center',
    },
  },
  imgText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '64px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginTop: '35px',
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    width: '580px',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      fontSize: '14px',
      textAlign: 'center',
    },
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    textDecoration: 'underline',
    color: '#0070F4',
    marginTop: '22px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '43px',
      textAlign: 'center',
    },
  },
  paperDiv: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '40px',
    right: '30px',
    [theme.breakpoints.down('sm')]: {
      overflow: 'scroll',
      left: '20px',
      bottom: '-100px',
      width: '90%',
    },
  },
  paper: {
    width: '263px',
    height: '227px',
    border: '1px solid #DFDFDF',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '173px',
      padding: '0 45px',
      width: '100%',
    },
  },
  personIcon: {
    marginTop: '24px',
    marginLeft: '103px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  personIcon1: {
    marginTop: '19px',
    marginLeft: '94px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    width: '192px',
    textAlign: 'center',
    marginLeft: '36.48px',
    marginTop: '21px',
    color: '#64626a',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: '22px',
      marginTop: 0,
    },
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    width: '192px',
    textAlign: 'center',
    marginLeft: '36.48px',
    marginTop: '9px',
    color: '#64626a',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15px',
      marginLeft: 0,
      marginTop: 0,
    },
  },
  logo: {
    marginLeft: '110px',
    marginTop: '17px',
    height: '17px',
    [theme.breakpoints.down('sm')]: {
      width: '82px',
      height: '29px',
      margin: 'auto',
    },
  },
  logoSlack: {
    width: '70px',
    height: '20px',
    marginLeft: '96px',
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '30px',
      margin: 'auto',
    },
  },
  logoNotion: {
    width: '16.81px',
    height: '17.58px',
    marginLeft: '123.09px',
    marginTop: '14px',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
      margin: 'auto',
    },
  },
}));

export default useStyles;
