import React from 'react';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';

import { RouteComponentProps } from 'react-router';
import { Header, MiddleReveal } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const classes = useStyles();

  return (
    <Box style={{ height: '100vh' }}>
      <Header />
      <Container component="main" className={classes.container}>
        <Grid container direction="row" alignItems={'flex-end'} className={classes.content}>
          <Grid item>
            <Grid container direction="row" alignItems={'flex-start'}>
              <Grid item xs={2}>
                <MiddleReveal />
              </Grid>
              <Grid item xs={10} style={{ paddingTop: '48px' }}>
                <Typography variant="h5" align="left" color="textSecondary" component="p">
                  I'm an experienced <b>Full Stack Software Developer</b> with experience in <b>Product Management</b>.
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" component="p">
                  I have built web and mobile applications for production apps as well as many POCs. I'm actively
                  experimenting with deep learning tools and computer vision.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
