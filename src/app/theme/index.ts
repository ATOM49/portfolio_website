import { palinoRegular } from './fonts';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [palinoRegular.fontFamily, 'serif'].join(',')
  },
  spacing: 4,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [palinoRegular],
      }
    }
  }
});
