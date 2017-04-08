import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import ActionAndroid from 'material-ui/svg-icons/action/android';

export default class ToolbarExamplesSimple extends React.Component {

  render() {
    return (
      <Toolbar className="nav-bar">
        <ToolbarGroup firstChild={ true }>
          <ToolbarSeparator />
          <ToolbarTitle className="title" text="edSwap" />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup lastChild={ true }>
          <ToolbarSeparator />
          <RaisedButton
            icon={<ActionAndroid />}
            primary={ true }
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
