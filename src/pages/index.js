import * as React from 'react';
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';

import MoonIcon from '@material-ui/icons/WbSunny';
import SunIcon from '@material-ui/icons/NightsStay';

// styles
const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(8),
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}));

// markup
function IndexPage() {
  const classes = useStyles();
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className={classes.main}>
      <title>Home Page</title>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            Blog
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Toolbar />
        <Typography component="h1" variant="h3">
          Congratulations
          <br />
          <span>— you just made a Gatsby site! </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </Typography>
      </Container>
    </main>
  );
}

export default IndexPage;
