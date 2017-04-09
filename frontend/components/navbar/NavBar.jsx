import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import Popover from 'material-ui/Popover';
import { Tabs, Tab } from 'material-ui/Tabs';

export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state= { open: false };

    this.openPopover = this.openPopover.bind(this);
    this.closePopover = this.closePopover.bind(this);
  }

  openPopover(e) {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  }

  closePopover(e) {
    this.setState({ open: false });
  }

  render() {
    return (
      <Toolbar className="nav-bar">
        <ToolbarGroup firstChild={ true }>
          <ToolbarSeparator />
          <ToolbarTitle className="title" text="edSwap" />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup lastChild={ true }>
            <RaisedButton
              label="Log In / Sign Up"
              onClick={ this.openPopover }
              primary={ true }
            />
            <Popover
              open={ this.state.open }
              anchorEl={ this.state.anchorEl }
              anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
              targetOrigin={ { horizontal: 'right', vertical: 'top' } }
              onRequestClose={ this.closePopover }
            >
            <Tabs>
              <Tab className="auth-tab" label="Log In">
                <form className="auth-form">
                  Log In to edSwap! It's the best thing you'll ever use!!
                  <RaisedButton label="Submit" primary={ true } />
                </form>

              </Tab>
              <Tab className="auth-tab" label="Sign Up">
                <form className="auth-form">
                  Sign Up for edSwap!

                </form>
              </Tab>
            </Tabs>
            </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
