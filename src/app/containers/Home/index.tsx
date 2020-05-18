import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { RouteComponentProps } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { useTodoActions } from 'app/actions';
// import { RootState } from 'app/reducers';
// import { TodoModel } from 'app/models';
// import { Header, TodoList, Footer } from 'app/components';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  
const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
    buttonText: 'Get started',
    buttonVariant: 'contained'
  },
  {
    title: 'Enterprise',
    price: '30',
    description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];
// const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
//   (key) => TodoModel.Filter[key]
// );

// const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
//   [TodoModel.Filter.SHOW_ALL]: () => true,
//   [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
//   [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
// };

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  const classes = useStyles();
//   const dispatch = useDispatch();
//   const todoActions = useTodoActions(dispatch);
//   const { todos, filter } = useSelector((state: RootState) => {
//     const hash = location?.hash?.replace('#', '');
//     return {
//       todos: state.todos,
//       filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
//     };
//   });

//   const handleClearCompleted = React.useCallback((): void => {
//     todoActions.clearCompleted();
//   }, [todoActions]);

//   const handleFilterChange = React.useCallback(
//     (filter: TodoModel.Filter): void => {
//       history.push(`#${filter}`);
//     },
//     [history]
//   );

//   const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
//   const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
//   const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Abhilash Mirji
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout. It&apos;s built with
          default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={'outlined'} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </div>
  );
};
