import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@mui/styles";
import Dialog from '@mui/material/Dialog';
import UIAppBar from 'core/ui/appbar.js';
import UIToolBar from 'core/ui/toolbar.js';
import UIButton from 'core/ui/button.js';

const styles = {
  root: {
    marginTop: '65px',
  },
  message : {
    padding: '1em',
  },
  flex: {
    flex: 1,
  },
};

class MessageDialog extends React.Component {
  constructor(props){
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose(e){
    e.stopPropagation();
    if(this.props.onClose){
      this.props.onClose();
    }
  }
  
  render() {
    var key = 0;
    const classes = this.props.classes;
    return (
      <Dialog fullScreen className={classes.root} open={this.props.open}>
        <UIAppBar position='fixed'>
          <UIToolBar>
            <div type="Title" className={classes.flex}/>
            <UIButton key={key++} icon={'close'} render={'icon'} onClick={this.handleRequestClose}/>
          </UIToolBar>
        </UIAppBar> 
        {this.props.children}
      </Dialog>      
    );
  }
}

MessageDialog.propTypes = {
  
}


export default withStyles(styles)(MessageDialog);