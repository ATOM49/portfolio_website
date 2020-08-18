import React, { useEffect } from 'react';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useProjectActions } from 'app/actions';
import { motion } from 'framer-motion';

// import { useProjectActions, ProjectActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { Header } from 'app/components/Header';
import { ProjectItem } from 'app/components/ProjectItem';
import Grid from '@material-ui/core/Grid';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(history, location);
  const projectActions = useProjectActions(dispatch);
  const { loading, projects } = useSelector((state: RootState) => {
    return {
      loading: state.projects?.loading,
      projects: state.projects?.projects
    };
  });
  console.log(projects);
  useEffect(() => {
    projectActions.fetchProjects();
  }, [projectActions.fetchProjects]);
  //TODO: Move the header outside the component and have common header for projects and about me
  return (
    <motion.div
      style={{ height: '100vh' }}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } }, entry: { transition: { staggerChildren: 0.2 } } }}
    >
      <Header activeProject={undefined} />
      <Container component="main" className={classes.content}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={8}>
            {projects &&
              projects.map((project, index) => (
                <Grid item key={project.projectId} xs={4}>
                  <ProjectItem
                    key={project.projectId}
                    history={history}
                    project={project}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </motion.div>
  );
};
