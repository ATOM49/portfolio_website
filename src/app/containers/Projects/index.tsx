import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RouteComponentProps } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useProjectActions } from 'app/actions';

// import { useProjectActions, ProjectActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { ProjectList } from 'app/components/ProjectList';
import { Header } from 'app/components/Header';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const dispatch = useDispatch();
  const projectActions = useProjectActions(dispatch);
  const { projects, loading } = useSelector((state: RootState) => {
    return {
      projects: state.projects?.projects,
      loading: state.projects?.loading
    };
  });
  useEffect(() => {
    projectActions.fetchProjects();
  }, [projectActions.fetchProjects]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        {loading ? <CircularProgress /> : <ProjectList projects={projects} />}
      </Container>
    </React.Fragment>
  );
};