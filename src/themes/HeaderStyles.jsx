import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appbar: {
    background: '#fff',
    position: 'relative',
    zIndex: '1401',
  },
  toolbar: {
    margin: '0 auto',
    padding: '0 70px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '77.56px',
    width: '1330px',
    [theme.breakpoints.down('sm')]: {
      width: 'inherit',
      justifyContent: 'end',
      padding: '0 15px',
    },
  },
  logo: {
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-10px',
    },
  },
  btn: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    '&:hover': {
      background: 'none',
    },
  },
  btnAbout: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    marginLeft: '30px',
    marginRight: '30px',
    '&:hover': {
      background: 'none',
    },
  },
  signInBtn: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    '&:hover': {
      background: 'none',
    },
  },
  getStartedBtn: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    width: '106px',
    height: '40px',
    backgroundColor: '#FF4C2A',
    color: '#fff',
    borderRadius: '5px',
    marginLeft: '32px',
    '&:hover': {
      background: '#FF4C2A',
    },
  },
  gettingStartedBtn: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'none',
    width: '106px',
    height: '40px',
    backgroundColor: '#FF4C2A',
    color: '#fff',
    borderRadius: '5px',
    '&:hover': {
      background: '#FF4C2A',
    },
  },
  buttonDiv: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  btnsDiv: {
    marginLeft: '85px',
  },
  lists: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  menu: {
    display: 'none',
    color: '#191919',
    position: 'absolute',
    right: '0',
    padding: '0',
    width: '36px',
    height: '33px',
    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  menuClear: {
    display: 'none',
    color: '#191919',
    position: 'absolute',
    right: '0',
    padding: '0',
    '& .MuiSvgIcon-root': {
      width: '34px',
      height: '40px',
    },

    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    backgroundColor: '#fff',
    color: '#fff',
    height: '478px',
    overflow: 'hidden',
  },
  drawerHeader: {
    marginTop: '73px',
  },
  listBtn: {
    marginBottom: '30px',
    color: '#000',
    '& .MuiTypography-body1': {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: '400',
    },
  },
}));

export default useStyles;
