import React from 'react';

class UIComponent extends React.Component {
  getDefaults(){}

  initUI() {
    const defaults = this.getDefaults();    
    for(var def in defaults){
      this.state[def] = (this.props[def]) ? this.props[def] : defaults[def];
    }
  }

  componentWillMount(){
    this.initUI();
  }
  
  render() {
    return "";
  }
}

export default (UIComponent);