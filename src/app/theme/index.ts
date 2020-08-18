import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(',')
  },
  spacing: 8,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ["Helvetica Neue"],
      }
    }
  }
});
