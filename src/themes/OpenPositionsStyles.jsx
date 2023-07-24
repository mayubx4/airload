import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '229px auto 0',
    display: 'flex',
    flexDirection: 'column',
    width: '1122px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
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
  heading: {
    fontFamily: 'Roboto',
    fontSize: '48px',
    fontWeight: '400',
    width: '478px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  secondDiv: {
    marginTop: '75px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paper: {
    width: '360px',
    height: '226px',
    border: '1px solid #E8E7E8',
    transition: 'all .2s',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 36px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 6%)',
    },
  },
  paper0: {
    width: '360px',
    height: '226px',
    border: '1px solid #E8E7E8',
    transition: 'all .2s',
    cursor: 'pointer',
    display: 'none',
    marginTop: '10px',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 36px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 6%)',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '300px',
    },
  },
  paperText: {
    display: 'flex',
    marginTop: '30px',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '700',
    marginLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
    },
  },
  time: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#B3B1B7',
    marginLeft: '72.5px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '16.5px',
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    width: '296px',
    marginTop: '25px',
    marginLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '260px',
      marginLeft: '20px',
    },
  },
  txt: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#3B3A40',
    marginTop: '34px',
    marginLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '13px',
      marginLeft: '20px',
    },
  },
  paper1: {
    width: '360px',
    height: '482px',
    border: '1px solid #E8E7E8',
    marginTop: '30px',
    transition: 'all .2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 36px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 6%)',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      width: '300px',
    },
  },
  txt1: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#3B3A40',
    marginTop: '49px',
    marginLeft: '24px',
  },
  subText1: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    width: '302px',
    marginTop: '58px',
    marginLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '260px',
      marginLeft: '20px',
      marginTop: '40px',
    },
  },
  apply: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#0070F4',
    textDecoration: 'underline',
    marginTop: '50px',
    marginLeft: '24px',
  },
  paper2: {
    width: '360px',
    height: '226px',
    border: '1px solid #E8E7E8',
    marginTop: '30px',
    transition: 'all .2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 36px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 6%)',
    },
  },
  time1: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#B3B1B7',
    marginLeft: '203.5px',
  },
  allCategories: {
    width: '180px',
    marginLeft: '114px',
    marginTop: '80px',
  },
  allCategories1: {
    width: '300px',
    textAlign: 'center',
    marginTop: '50px',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  number: {
    fontFamily: 'Roboto',
    fontSize: '72px',
    fontWeight: '400',
    marginLeft: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '52px',
      marginLeft: 0,
    },
  },
  seeAll: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    textDecoration: 'underline',
    marginTop: '15px',
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      marginTop: 0,
    },
  },
  textFieldDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '92px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  formControl: {
    width: '110px',
    height: '32px',
    marginLeft: '16px',
    '& .MuiOutlinedInput-input': {
      padding: '10px 15px',
    },
  },
  categories: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    color: '#8E8C95',
    marginTop: '5px',
  },
  secondCol: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  thirdCol: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
