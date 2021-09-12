import React from 'react';
import UIComponent from './ui_component';
import Toolbar from '@material-ui/core/Toolbar';


class UIToolbar extends UIComponent {
  constructor() {
    super();
    this.state = {
    }
  }

  getDefaults(){
    const defaults = {
      className : '',      
    }    
    return defaults;
  }
  
  render() {
    const classes = this.props.classes;
    const style = (this.state.style != "" && this.state.style != null) ? this.state.style : {};
    //console.info(style);
    return (
      <Toolbar style={style}>
        {this.props.children}
      </Toolbar>
    );
  }
}

export default UIToolbar;