import React from 'react';
import { styled } from '@mui/material/styles';
import { default as _Link } from 'next/link';
import constants from './_';
import Button from '@mui/material/Button';

import theme from 'app/config/theme/main';

const LinkBox = styled('div')({
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
});

const LinkText = styled('span')({
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: theme.palette.primary.main,
    textDecorationThickness: '1px',
});

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