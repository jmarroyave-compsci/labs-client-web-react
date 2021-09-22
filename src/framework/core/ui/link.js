import React from 'react';
import { NavLink } from 'react-router-dom';
import constants from './_';

class _Link extends React.Component {
  render() {
    var { children, className, to, href, style, external } = this.props;

    to = (to) ? to : href;
    to = (to) ? to : "http://localhost";
    children = (to) ? children : "NO LINK DEFINED";
    style = (style) ? style : {};
    external = (external === true);

    if(to && typeof to !== "string") return "INVALID URL";

    const internal = (external || (to && to.indexOf('http') === 0)) ? false : true;
    const jump = (to.indexOf("#") === 0) ? true : false;
    const raised = true;
    const color = 'inherit';
    const target = (!internal) ? "_blank" : '_self'
    return (
        (jump == false && internal == true && constants.links_disabled == false) ? 
            <NavLink className={className} to={to} style={style}>{children}</NavLink>
        :
            <a className={className} href={to} style={style} target={target}>{children}</a>
    );
  }
}

export default _Link;