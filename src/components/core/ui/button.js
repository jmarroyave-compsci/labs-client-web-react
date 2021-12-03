import React from 'react';
import ComButton from '@mui/material/Button';
import ComIconButton from '@mui/material/IconButton';
import Icon from './icon';

class Button extends React.Component { 
  render() {
    var {fab, disabled, className, style, href, color, onClick, src, icon, outlined, contained, size, noPadding, width, height } = this.props;
    const ico = (src || icon) ? <Icon icon={icon} src={src} width={width} height={height}/> : "";
    const variant = (outlined) ? 'outlined' : (contained) ? 'contained' : null;
    var _style = {...style};
    _style.padding = (noPadding) ? 0 : '0.15rem 0.25rem';


    return (
      (fab ?
          <ComButton variant={variant} color={color} href={href} className={className} onClick={onClick} disabled={disabled} fab style={_style}>
            {ico}
          </ComButton>
      :
        (ico && this.props.render === 'icon') ?
          <ComIconButton className={className} disabled={disabled} variant={variant} color={color} onClick={onClick} style={_style}>
            {ico}
          </ComIconButton>             
        :      
          <ComButton variant={variant} color={color} href={href} className={className} onClick={onClick} disabled={disabled} style={_style}>
            {ico &&
              ico
            }
            {this.props.children}
          </ComButton>
      )
    )
  }
}

/*
          <ComButton startIcon={ico} variant={variant} color={color} href={href} className={className} onClick={onClick} disabled={disabled} fab style={_style}>
            {this.props.children}
          </ComButton>
*/

export default Button;

Button.defaultProps = {
  className : null,      
  href: null,
  disabled: false,
  onClick: null,
  fab: false,
  style: {padding: null},
  color: 'inherit',
  src: null,
  icon: null,
  outlined: false,
  contained: false,
  noPadding: false,
};


