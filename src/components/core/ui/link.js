import React from 'react';
import { styled } from '@mui/material/styles';
import { default as _Link } from 'next/link';
import constants from './_';
import Button from '@mui/material/Button';

const LinkBox = styled('span')({
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: 'rgba(0,0,0,0.15)',
    textDecorationThickness: '1px',
    display: 'flex',
    flexGrow: 1,
});

const Link =  ( props ) => {
    var { children, className, to, href, external } = props;

    to = (to) ? to : href;
    to = (to) ? to : "http://localhost";
    children = (to) ? children : "NO LINK DEFINED";
    external = (external === true);

    if(to && typeof to !== "string") return "INVALID URL";

    const internal = (external || (to && to.indexOf('http') === 0)) ? false : true;
    const jump = (to.indexOf("#") === 0) ? true : false;
    const raised = true;
    const target = (!internal) ? "_blank" : '_self'
    return (
        <_Link className={className} href={to}>
            <LinkBox>
                {children}
            </LinkBox>
        </_Link>
    );
}

export default Link;