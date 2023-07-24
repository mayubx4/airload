import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1177px',
    height: '203px',
    margin: '232px auto',
    backgroundColor: '#FF4C2A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      height: '321px',
      flexDirection: 'column',
      margin: '90px auto',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '32px',
    fontWeight: '700',
    color: '#fff',
    marginTop: '62px',
    marginLeft: '48px',
    [theme.breakpoints.down('sm')]: {
      width: '196px',
      textAlign: 'center',
      marginTop: '43px',
      marginLeft: '74px',
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    color: '#fff',
    marginTop: '9px',
    marginLeft: '48px',
    [theme.breakpoints.down('sm')]: {
      width: '280px',
      textAlign: 'center',
      marginTop: '11px',
      marginLeft: '34px',
    },
  },
  btn: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '500',
    textTransform: 'none',
    color: '#0070F4',
    width: '210px',
    height: '48px',
    backgroundColor: '#FFFFFF',
    marginTop: '78px',
    marginRight: '48px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-120px',
      marginRight: 0,
      marginLeft: '67px',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
}));

export default useStyles;
