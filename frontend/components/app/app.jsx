import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import edSwapTheme from './edSwapTheme';

// components
import FlatButton from 'material-ui/FlatButton';
import NavBar from '../navbar/NavBar';

const App = () => {
  return(
    <MuiThemeProvider muiTheme={ getMuiTheme(edSwapTheme) }>
      <section>
        <NavBar />
        Welcome to edSwap!
      </section>
    </MuiThemeProvider>
  );
};

export default App;
