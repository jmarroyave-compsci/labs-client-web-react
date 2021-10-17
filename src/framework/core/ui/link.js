import React from 'react';
import { styled } from '@mui/material/styles';
import { default as _Link } from 'next/link';
import constants from './_';
import Button from '@mui/material/Button';

const LinkBox = styled('a')({
    cursor: 'pointer',
    textStyle: 'underlined',
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
        <LinkBox>
            {(jump == false && internal == true && constants.links_disabled == false) ? 
                <_Link className={className} href={to}>
                    <div>{children}</div>
                </_Link>
            :
                <a className={className} href={to} target={target}>{children}</a>
            }
        </LinkBox>
    );
}

export default Link;