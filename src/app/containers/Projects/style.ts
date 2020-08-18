import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    height: 'calc(100% - 64px)',
    padding: theme.spacing(16, 0, 16)
  },
}));
