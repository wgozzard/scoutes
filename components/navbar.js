import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Link href="/signin">
              <a>Home</a>
            </Link>
          </Button>

          <Button color="inherit">
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
