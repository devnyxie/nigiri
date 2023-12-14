import { createTheme } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
function create_mui_theme({ theme }) {
  const mui_theme = createTheme({
    palette: {
      primary: {
        main: '#FBCC84',
        // text: '#FBCC84',
        // light: '#FBCC84',
        // dark: '#FBCC84',
        // contrastText: '#FBCC84',
      },
      secondary: {
        main: '#FBCC84',
        // text: '#FBCC84',
        // light: '#FBCC84',
        // dark: '#FBCC84',
        // contrastText: '#FBCC84',
      },
    },
    // palette: {
    //   primary: lime,
    //   secondary: purple,
    // },
  });
  return mui_theme;
}

export default create_mui_theme;
