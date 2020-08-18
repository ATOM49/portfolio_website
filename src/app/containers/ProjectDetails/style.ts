import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    height: 'calc(100% - 64px)',
    paddingTop: theme.spacing(16)
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(2),
    margin: 0
  },
  chip: {
    margin: theme.spacing(1)
  }
}));
