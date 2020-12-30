import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    padding: '25px',
    height: '420px',
    flex: '0 0 43%',
    maxWidth: 'calc(50% - 50px)',
    listStyle: 'none',
    margin: 0,
  },
  cardContentContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'block',
    pointerEvents: 'none',
  },
  cardContentContainerOpen: {
    width: '100%',
    height: '100%',
    display: 'block',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1,
    overflow: 'hidden',
    padding: '40px 0',
  },
  cardContent: {
    pointerEvents: 'auto',
    position: 'relative',
    borderRadius: 20,
    background: '#1c1c1e',
    overflow: 'hidden',
    margin: '0 auto',
    width: '100%',
    height: '100%',  
  },
  cardContentOpen: {
    height: 'auto',
    maxWidth: 700, 
    pointerEvents: 'auto',
    position: 'relative',
    borderRadius: 20,
    background: '#1c1c1e',
    overflow: 'hidden',
    margin: '0 auto',
    width: '100%',
  },
  contentContainer: {
    padding: '460px 35px 35px 35px',
    maxWidth: 700,
    width: '90vw',
  },
  contentParagraph:{
    color: '#9d9ca1',
    fontSize: 20,
  },
  cardOpenLink: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  cardImage: {},
  cardImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    height: 420,
  },
  cardImageContainerOpen: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    height: 420,
    zIndex: 1
  },
  titleContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    maxWidth: '50%'
  },
  title:{
    color: '#fff',
    margin: '8px 0',
  },
  titleContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: 30,
    maxWidth: '50%'
  },
  header: {
    color: '#fff',
    marginTop: 8,
    marginBottom: 8
  },
  category: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.08)',
    willChange: 'opacity',
    top: 0,
    bottom:0,
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)'
    },
  overlayLink: {
    zIndex: 1,
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.08)',
    willChange: 'opacity',
    top: 0,
    bottom:0,
    left: '50%',
    width: '100vw',
    transform: 'translateX(-50%)',
  }
}));
