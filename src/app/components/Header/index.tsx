import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { ProjectModel } from 'app/models';
import { motion } from 'framer-motion';

export namespace Header {
  export interface Props {
    activeProject?: ProjectModel;
  }
}

const transition = {
  duration: 1,
  ease: 'easeOut'
};
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }
};

export const Header = ({ activeProject }: Header.Props): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
          <motion.div variants={backVariants}>
            <Link className={classes.link} to={activeProject ? '/projects' : '/'}>{activeProject ? '← Back' : 'Abhilash Mirji'}</Link>
          </motion.div>
        </Typography>
        <nav>
          <Link className={classes.link} to="/projects">Projects</Link>
          <Link className={classes.link} to="/about">Gallery</Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
