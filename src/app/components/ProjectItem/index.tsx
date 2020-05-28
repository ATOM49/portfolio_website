import React from 'react';
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from './style';
import { ProjectModel } from 'app/models';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

export namespace ProjectItem {
  export interface Props {
    project: ProjectModel;
  }
}

export const ProjectItem = ({ project }: ProjectItem.Props): JSX.Element => {
  const classes = useStyles();

  return (
    // <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {project.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {project.startDate} + {project.endDate}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {project.content}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                <Link component={RouterLink} to={`/projects/${project._id}`}>
                  Continue reading...
                </Link>
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={project.image} title={project.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    // </Grid>
  );
};
