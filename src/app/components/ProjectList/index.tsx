import React from 'react';
import { ProjectItem } from '../ProjectItem';
import { ProjectModel } from 'app/models';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';

export namespace ProjectList {
  export interface Props {
    projects: ProjectModel[] | undefined;
  }
}

export const ProjectList = ({ projects }: ProjectList.Props): JSX.Element => {
  const classes = useStyles();
  console.log('projects list', projects);
  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Projects
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            These are the list of projects that I have worked on in the 5 years of experience.
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {projects &&
            projects.map((project: ProjectModel) => (
              <Grid item key={project._id} xs={12} md={12} sm={12}>
                <ProjectItem project={project} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
};
