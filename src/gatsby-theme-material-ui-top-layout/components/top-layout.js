import * as React from 'react';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { createMuiTheme } from '@material-ui/core';

function TopLayout({ children, theme }) {
  const [type, setType] = React.useState('light');

  function toggleTheme() {
    setType(type === 'light' ? 'dark' : 'light');
  }

  const newTheme = createMuiTheme({
    palette: {
      type,
      primary: {
        main: theme.palette.primary.main,
      },
    },

    // Extend default theme object with additional utils
    isDark: type === 'dark',
    toggleTheme,
  });

  return <ThemeTopLayout theme={newTheme}>{children}</ThemeTopLayout>;
}

export default TopLayout;
