import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1177px',
    margin: '52px auto 0',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      margin: '87px auto 0',
      overflow: 'hiddin',
    },
  },
  ellipse: {
    marginLeft: '993px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '42px',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '29px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      fontWeight: '700',
    },
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: '400',
    textAlign: 'center',
    width: '768px',
    marginTop: '34px',
    marginLeft: '196px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      width: '340px',
      marginLeft: 0,
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '40px',
    width: '1177px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      margin: '40px auto',
    },
  },
  smallEllipse: {
    position: 'relative',
    top: '-205px',
    left: '-1155px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  blogImg: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  blog: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '48px',
      width: '343px',
      cursor: 'none',
    },
  },
  blog1: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
      cursor: 'none',
    },
  },
  orangeButton: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#fff',
    width: '96px',
    height: '26px',
    borderRadius: '20px',
    backgroundColor: '#FF4C2A',
    textAlign: 'center',
    marginTop: '24px',
    paddingTop: '4px',
  },
  blueButton: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#fff',
    width: '96px',
    height: '26px',
    borderRadius: '20px',
    backgroundColor: '#0070F4',
    textAlign: 'center',
    marginTop: '24px',
    paddingTop: '4px',
  },
  blueButton1: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '400',
    color: '#fff',
    width: '96px',
    height: '26px',
    borderRadius: '20px',
    backgroundColor: '#0070F4',
    textAlign: 'center',
    marginTop: '24px',
    paddingTop: '4px',
    marginLeft: '8px',
  },
  colorbtn: {
    display: 'flex',
    flexDirection: 'row',
  },
  blogPost: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: '700',
    color: '#191919',
    width: '352px',
    marginTop: '11px',
    [theme.breakpoints.down('sm')]: {
      width: '343px',
    },
    '&:hover': {
      color: '#FF4C2A',
    },
  },
  authorDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '13px',
  },
  by: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#666666',
    marginLeft: '20px',
    marginTop: '8px',
  },
  author: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#191919',
    marginLeft: '4px',
    marginTop: '8px',
  },
}));

export default useStyles;
