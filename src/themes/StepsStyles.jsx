import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '260px',
    [theme.breakpoints.down('sm')]: {
      width: '344px',
      margin: '88.7px auto 0',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '64px',
    fontWeight: '400',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      fontWeight: '700',
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'center',
    width: '590px',
    marginTop: '49px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '308px',
      marginTop: '23px',
      color: '#666666',
    },
  },
  paperDiv: {
    marginTop: '53px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '1122px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: '16px auto 0',
      width: '344px',
    },
  },
  paperTick: {
    backgroundColor: '#EAEAEA !important',
  },
  hide: {
    display: 'none',
  },
  paper: {
    width: '360px',
    height: '226px',
    backgroundColor: '#fff',
    border: '1px solid #DFDFDF',
    transition: 'all .2s',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      marginBottom: '24px',
      cursor: 'none',
    },
  },
  tickLogo: {
    marginTop: '29px',
    marginLeft: '24px',
  },
  mainHeading: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '700',
    marginTop: '15px',
    marginLeft: '24px',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    width: '280px',
    marginTop: '26px',
    marginLeft: '24px',
  },
}));

export default useStyles;
