import React from 'react';
import UIComponent from './ui_component';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


const styles = theme => ({
  root: {
  },
})

class UIAppBar extends UIComponent {
  constructor() {
    super();
    this.state = {
    }
  }

  getDefaults(){
    const defaults = {
      position  : 'static',
      className : '',
      color: 'primary',      
    }    
    return defaults;
  }
  
  componentDidMount() {

  }
  
  render() {
    const classes = this.props.classes;
    return (
      <AppBar className={classes.root} position={this.props.position} className={this.state.className} color={this.state.color}>
        {this.props.children}
      </AppBar>
    );
  }
}

export default withStyles(styles)(UIAppBar);