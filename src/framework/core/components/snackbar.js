import React from 'react';
import UIComponent from 'core/components/ui_component.js';
import Snackbar from '@material-ui/core/Snackbar';

class UISnackbar extends UIComponent {
  constructor() {
    super();
    this.state = {
      open: false,
      message: '',
    }

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  getDefaults(){
    const defaults = {
    }    
    return defaults;
  }

  handleRequestClose(event, reason){
    this.setState({ open: false, message : '' });
  };
  
  componentDidMount(){
    const $this = this;

    if(this.props.server){
      this.props.server.onError = function(err){
        $this.setState({open: true, message: err.toString()});
      }
    }
  }

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onRequestClose={this.handleRequestClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={String(this.state.message)}
      />
    );
  }
}

export default UISnackbar;