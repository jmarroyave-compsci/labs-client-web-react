import React from 'react';
import Link from './link';
import constants from './_';

class _Link extends React.Component {
  render() {
    var { children, className, to, href, border, style, external } = this.props;

    to = (to) ? to : href;
    to = (to) ? to : "http://localhost";

    children = (to) ? children : "NO LINK DEFINED";
    border = (border === true || border === "true") ? 'text-link' : '';
    style = (style) ? style : {};
    style.padding = (style.padding) ? style.padding : '0.5rem 0.75rem';

    className = `${border} ${(className) ? className : ''}`;
    external = (external === true);

    return (
        <Link className={className} to={to} style={style} external={external}>{children}</Link>
    )
  }
}

export default _Link;