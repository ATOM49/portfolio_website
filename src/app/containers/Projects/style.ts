import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    padding: 0
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    listStyle:'none',
    margin: 0,
    padding: 0,
    paddingInline: 'inherit',
    marginInline: 'inherit',
    marginBlock: 'inherit'
  }
}));
