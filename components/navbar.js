import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { Paper } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  mobilemenu: {
    width: 140,
    height: '40vh',
    position: 'absolute',
    top: 56,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobilemenuitem: {
    width: '100%',
  },
  desktopmenu: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobilemenuclose: {
    width: '20px',
    float: 'right',
    padding: 5,
    margin: 5,
    cursor: 'pointer',
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [menuopen, setMenuopen] = useState(false);
  const steless = menuopen ? { display: 'block' } : { display: 'none' };
  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={() => setMenuopen(!menuopen)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button className={classes.desktopmenu} color="inherit">
            <Link href="/signin">
              <a>Home</a>
            </Link>
          </Button>

          <Button className={classes.desktopmenu} color="inherit">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </Button>
          <Button className={classes.desktopmenu} color="inherit">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Button>
        </Toolbar>
        <div className={classes.mobilemenu} style={steless}>
          <div className={classes.mobilemenuclose} onClick={() => setMenuopen(!menuopen)}>
            X
          </div>
          <Button className={classes.mobilemenuitem} color="inherit">
            <Link href="/signin">
              <a>Home</a>
            </Link>
          </Button>

          <Button className={classes.mobilemenuitem} color="inherit">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </Button>
          <Button className={classes.mobilemenuitem} color="inherit">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Button>
        </div>
      </AppBar>
    </div>
  );
};
export default Navbar;
