import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { useStyles } from './style';
// import { Link } from 'react-router-dom';
import { Project } from 'app/models';
// import { motion } from 'framer-motion';
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from 'react-router-dom';

export namespace Header {
  export interface Props {
    activeProject?: Project;
  }
}

// const transition = {
//   duration: 1,
//   ease: 'easeOut'
// };
// const backVariants = {
//   exit: { x: 100, opacity: 0, transition },
//   enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }
// };

export const Header = ({ activeProject }: Header.Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          onClick={() => history.push('/')}
          variant="h6"
          className={classes.toolbarTitle}>
          Abhilash Mirji
        </Typography>
        <Avatar
          onClick={() => history.push('/about')}
          src="https://avatars2.githubusercontent.com/u/5340531?s=460&u=f9c41df2598ed5f221c88baf1d639306c5d9eda4&v=4" />
      </Toolbar>
    </AppBar>
  );
};
