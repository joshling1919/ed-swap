import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

import FlatButton from 'material-ui/FlatButton';

const App = () => {
  return(
    <MuiThemeProvider>
      <section>
        Welcome to edSwap!
        <FlatButton label="Hi!" />
        <Link to="auth">Press me</Link>
      </section>
    </MuiThemeProvider>
  );
};

export default App;
