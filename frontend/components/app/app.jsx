import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

// components
import FlatButton from 'material-ui/FlatButton';
import NavBar from '../navbar/NavBar';

const App = () => {
  return(
    <MuiThemeProvider>
      <section>
        <NavBar />
        Welcome to edSwap!
      </section>
    </MuiThemeProvider>
  );
};

export default App;
