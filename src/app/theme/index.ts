import { createMuiTheme } from '@material-ui/core/styles';
// import Palino from '../../assets/fonts/PalatinoLinoType.woff2';
// import Chapaza from '../../assets/fonts/Chapaza.woff2';

export const theme = createMuiTheme({
  // typography: {
  //   fontFamily: ['"Chapaza"'].join(',')
  // },
  spacing: 8,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // '@font-face': [Chapaza],
        ul: {
          listStyle: 'none',
          padding: 0,
          margin: 0
        },
        li: {
          listStyle: 'none',
          padding: 0,
          margin: 0
        }
      }
    }
  }
});
