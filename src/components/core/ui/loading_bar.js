import React from 'react';
import UIComponent from 'core/ui/ui_component.js';
import { withStyles } from "@mui/styles";

const styles = [{
}];

class UILoadingBar extends UIComponent {
  constructor() {
    super();
    this.state = {
      loading: false,
    }
  }

  getDefaults(){
    const defaults = {
      className: '',
    }    
    return defaults;
  }
  
  componentDidMount(){
    const $this = this;

    if(this.props.server){
      this.props.server.onStartLoading = function(){
        $this.setState({loading: true});
      }
      this.props.server.onStopLoading = function(){
        $this.setState({loading: false});
      }
      this.props.server.onError = function(err){
        $this.setState({loading: false});
      }
    }
  }

  render() {
  	return <div/>;
  }
}

export default withStyles(styles)(UILoadingBar);