import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import XS from "./layout-xs";

export default function Proxy( props ){
  return (
    <CoreProxy 
      xs={<XS {...props}/>}
    />
  )
} 
