import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { default as _Link } from 'next/link';
import Button from '@mui/material/Button';
import Error from 'core/ui/error';

const LinkBox = styled('div')({
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
});

const LinkText = styled('span')( ( { theme } ) => ({
    cursor: 'pointer',
    color: 'inherit',
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: 'inherit',
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

    if(to && typeof to !== "string"){
        return <Error from={"LINK"} data={`bad reference [${to}]`} />
    }

    const internal = (external || (to && to.indexOf('http') === 0)) ? false : true;
    const jump = (to.indexOf("#") === 0) ? true : false;
    const raised = true;
    const target = (!internal) ? "_blank" : '_self'

    const LINK = ( box === true ) ? <LinkBox>{children}</LinkBox> : <LinkText>{children}</LinkText>;
    return (
        <_Link className={className} href={to} as={to} passHref>
            <a style={{flex: 1, display: 'flex', width: "100%"}}>{LINK}</a>
        </_Link>
    );
}

export default Link;