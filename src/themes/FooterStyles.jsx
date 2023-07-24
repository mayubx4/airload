import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '1131.72px',
    margin: '0 auto 116px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 16px 54px',
      marginBottom: '10px',
    },
  },
  logoDiv: {
    marginLeft: '-8px',
  },
  logoText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#666666',
    marginLeft: '6.72px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '25px',
    },
  },
  firstDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mainHeading: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333333',
    marginBottom: '8px',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#666666',
    cursor: 'pointer',
    marginBottom: '11px',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#666666',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '27px',
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '86px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginTop: '10px',
    },
  },
  termsDiv: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '25px',
    },
  },
  terms: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#64626A',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '14px',
    },
  },
  privacy: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#64626A',
    cursor: 'pointer',
    marginLeft: '71px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: '14px',
    },
  },
  trust: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#64626A',
    cursor: 'pointer',
    marginLeft: '71px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  copyRights: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#64626A',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  thirdDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '62px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '30px',
    },
  },
  Twitter: {
    marginLeft: '32px',
  },
  Github: {
    marginLeft: '32px',
  },
  socialDiv: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  language: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#64626A',
    marginTop: '10px',
  },
  textFieldDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    width: '80px',
    height: '32px',
    marginLeft: '16px',
    '& .MuiOutlinedInput-input': {
      padding: '10px 15px',
    },
  },
  socialDivMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default useStyles;
