import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    // padding: 25,
    height: 420,
    flex: '0 0 40%',
    margin: 0
  },
  cardContentContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'block',
    pointer: 'none',
    padding: 0
  },
  cardContentContainerOpen: {
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1,
    overflow: 'hidden',
    padding: '72px 0',
  },
  cardContent: {
    pointerEvents: 'auto',
    position: 'relative',
    borderRadius: 20,
    background: '#3e3e3e',
    overflow: 'hidden',
    margin: '0 auto'
  },
  cardContentOpen: {
    height: 'auto',
    position: 'relative',
    borderRadius: 20,
    background: '#3e3e3e',
    overflow: 'hidden',
    margin: '0 auto',
    pointerEvents: 'none'
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
  titleContainerOpen:{
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
    left:0,
    width: '100%',
  },
  overlayLink: {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.08)',
    willChange: 'opacity',
    top: 0,
    left:0,
    height: '100vh',
    width: '100vw',
  },
  contentContainer: {
    padding: '460px 35px 35px 35px',
    // maxWidth: 700,
    // width: '90vw'
  }
}));
