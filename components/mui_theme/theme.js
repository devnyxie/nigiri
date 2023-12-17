import { createTheme } from '@mui/material/styles';
function create_mui_theme() {
  const mui_theme = createTheme({
    palette: {
      primary: {
        main: '#FBCC84',
      },
    },
  });
  return mui_theme;
}

export default create_mui_theme;
