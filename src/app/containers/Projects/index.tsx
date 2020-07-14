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
import { ProjectItem } from 'app/components/ProjectItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(location);
  const projectActions = useProjectActions(dispatch);
  const { loading, projects } = useSelector((state: RootState) => {
    return {
      loading: state.projects?.loading,
      projects: state.projects?.projects
    };
  });
  useEffect(() => {
    projectActions.fetchProjects();
  }, [projectActions.fetchProjects]);
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Header />
      {/* End hero unit */}
      <Container component="main" maxWidth={'lg'}>
        {loading ? (
          <CircularProgress />
        ) : (
          // <Router history={history}>
          //   <Route path={['projects/:_id', 'projects/']}>
          <GridList cellHeight={360} className={classes.cardList} cols={3}>
            {projects &&
              projects.map((project, index) => (
                <GridListTile key={project._id} cols={index  % 4 == 0 ? 2 : 1}>
                  <ProjectItem
                    key={project._id}
                    isSelected={location.pathname.includes(project._id)}
                    history={history}
                    {...project}
                  />
                </GridListTile>
              ))}
          </GridList>
          // <ul className={classes.cardList}>
          //   {projects &&
          //     projects.map((project) => (
          //       <ProjectItem
          //         key={project._id}
          //         isSelected={location.pathname.includes(project._id)}
          //         history={history}
          //         {...project}
          //       />
          //     ))}
          // </ul>
          // </Route>
          // </Router>
        )}
      </Container>
    </React.Fragment>
  );
};
