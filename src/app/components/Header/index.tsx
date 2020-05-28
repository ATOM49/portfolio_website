import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import { Link as RouterLink } from 'react-router-dom';

export namespace Header {
  export interface Props {}
}

export const Header = ({}: Header.Props): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link component={RouterLink} to="/">
            Abhilash Mirji
          </Link>
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" component={RouterLink} to="/projects" className={classes.link}>
            Projects
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Gallery
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
