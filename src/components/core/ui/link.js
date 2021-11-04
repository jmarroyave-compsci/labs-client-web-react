import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { default as _Link } from 'next/link';
import Button from '@mui/material/Button';

import { ThemeContext }  from 'app/config/theme/main';

const LinkBox = styled('div')({
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
});

const LinkText = styled('span')( ( { theme } ) => ({
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: theme.palette.primary.main,
    textDecorationThickness: '1px',
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: 'hidden',
    display: 'inline-block',
    width: '100%',
}));

const Link =  ( props ) => {
    var { box, children, className, to, href, external } = props;

    to = (to) ? to : href;
    to = (to) ? to : "http://localhost";
    children = (to) ? children : "NO LINK DEFINED";
    external = (external === true);

    if(to && typeof to !== "string") return "INVALID URL";

    const internal = (external || (to && to.indexOf('http') === 0)) ? false : true;
    const jump = (to.indexOf("#") === 0) ? true : false;
    const raised = true;
    const target = (!internal) ? "_blank" : '_self'

    const LINK = ( box === true ) ? <LinkBox>{children}</LinkBox> : <LinkText>{children}</LinkText>;
    return (
        <_Link className={className} href={to}>
            {LINK}
        </_Link>
    );
}

export default Link;


/*
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

*/