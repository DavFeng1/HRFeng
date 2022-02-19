import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rany',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#522d70',
    },
    secondary: {
      main: '#512DA8',
    },
    success: {
      main: '#2196F3',
    },

    background: {
      default: '#1c1f24',
    },
  },
});

export default theme;
