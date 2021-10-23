import React from 'react';
import UIComponent from './ui_component';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import UIIcon from './icon';

class UIButton extends UIComponent {
  constructor() {
    super();
    this.state = {
    }
  }

  getDefaults(){
    const defaults = {
      className : null,      
      href: '',
      disabled: false,
      onClick: null,
      fab: false,
      style: {},
    }    
    return defaults;
  }
  
  render() {
    const ico = ("icon" in this.props && this.props.icon != null) ? <UIIcon icon={this.props.icon}/> : "";
    const color = ("color" in this.props) ? this.props.color : "inherit";
    const fab = (this.state.fab === true) ? true : false;
    const raised = (this.state.fab === true) ? "raised" : "flat";
    const disabled = (this.state.disabled === true) ? true : false;
    const className = (this.state.className !== "") ? this.state.className : "";
    const style = (this.state.style != "" && this.state.style != null) ? this.state.style : {};
    const href = (this.state.href !== "") ? this.state.href : null;
    const onClick = (this.state.onClick !== null) ? this.state.onClick : null;

    //console.info(ico, color, fab, raised, disabled, className, this.state, href, onClick);
    return (
      (fab ?
          <Button raised={raised} color={color} href={href} className={className} onClick={onClick} disabled={disabled} fab style={style}>
            {ico}
          </Button>
      :
        (ico && this.props.render === 'icon') ?
          <IconButton className={className} disabled={disabled} color={color} onClick={onClick} style={style}>
            {ico}
          </IconButton>             
        :      
          <Button raised={raised} color={color} href={href} className={className} onClick={onClick} disabled={disabled} style={style}>
            {ico &&
              ico
            }
            {this.props.children}
          </Button>
      )
    )
  }
}

export default UIButton;

