import React, { useEffect } from 'react';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useProjectActions } from 'app/actions';

// import { useProjectActions, ProjectActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { Header } from 'app/components/Header';
// import { ProjectItem } from 'app/components/ProjectItem';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

import { motion } from 'framer-motion';
import { Grid, Typography, Paper, Chip, Card, CardHeader, Avatar } from '@material-ui/core';
// import { images } from './images';
// import Box from '@material-ui/core/Box';
// import TagFacesIcon from '@material-ui/icons/TagFaces';

const transition = {
  duration: 0.5,
  ease: 'easeOut'
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { ...transition, ...{ duration: 1 } }
  },
  initial: { y: '-100%', opacity: 0 }
};

const titleVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
};

const contentVariantss = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { ...transition, ...{ delay: 0.5 } }
  }
};

const paperVariants = {
  exit: { x: '50%', opacity: 0, transition },
  enter: {
    x: '0%',
    opacity: 1,
    transition: { ...transition, ...{ duration: 1 } }
  }
};

interface ChipData {
  key: number;
  label: string;
}

export namespace App {
  export interface Props extends RouteComponentProps<void> { }
}

export const App = ({ history, location, match }: App.Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(location.pathname.split('/').slice(-1)[0]);
  const projectActions = useProjectActions(dispatch);
  const { loading, activeProject } = useSelector((state: RootState) => {
    return {
      loading: state.projects?.loading,
      activeProject: state.projects?.activeProject
    };
  });
  useEffect(() => {
    projectActions.fetchProjectDetails(location.pathname.split('/').slice(-1)[0]);
  }, [projectActions.fetchProjectDetails]);
  console.log(activeProject);
  const [chipData] = React.useState<ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ]);

  // const handleDelete = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  // };
  return (
    <motion.div style={{ height: '100vh' }} initial="exit" animate="enter" exit="exit">
      <Header activeProject={activeProject} />
      <Container component="main" className={classes.content}>
        {loading ? (
          <CircularProgress />
        ) : (
            <Container maxWidth={'lg'}>
              <motion.img
                initial={{ y: '-50%', opacity: 0 }}
                style={{ width: '100%', height: 360, objectFit: 'cover' }}
                variants={imageVariants}
                src={activeProject?.imageUrl}
                alt="The Barbican"
              />
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <motion.div variants={titleVariants}>
                    <Typography variant="h2">{activeProject?.title}</Typography>
                  </motion.div>
                  <motion.div variants={contentVariantss}>
                    <Typography variant="body1">{activeProject?.content}</Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={3} spacing={8}>
                  <motion.div variants={paperVariants}>
                    <Paper>
                      <Card>
                        <CardHeader
                          avatar={
                            <Avatar alt={activeProject?.company.name} src={activeProject?.company.logoUrl} />
                          }
                          title={activeProject?.company.name}
                          subheader={activeProject?.company.description}
                        />
                      </Card>
                    </Paper>
                  </motion.div>
                  <motion.div variants={paperVariants}>
                    <Paper className={classes.chips}>
                      {chipData.map((data) => {
                        // let icon;
                        // if (data.label === 'React') {
                        //   icon = <TagFacesIcon />;
                        // }
                        return (
                          <li key={data.key}>
                            <Chip
                              // icon={icon}
                              label={data.label}
                              // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                              className={classes.chip}
                            />
                          </li>
                        );
                      })}
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          )}
      </Container>
    </motion.div>
  );
};
