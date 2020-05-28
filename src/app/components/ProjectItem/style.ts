import { Theme, makeStyles, useTheme } from '@material-ui/core/styles';

export { useTheme };

export const useStyles = makeStyles((theme :Theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));
