import React from 'react';
import Hidden from '@mui/material/Hidden';

const UIProxy = ( props ) => {
	var { xs, sm, md, lg, xl } = props;

	xs = (xs) ? xs : null;
	sm = (sm) ? sm : xs;
	md = (md) ? md : sm;
	lg = (lg) ? lg : md;
	xl = (xl) ? xl : lg;

	return (
		<>
    		<Hidden only={['sm', 'md', 'lg', 'xl']}>
    			{xs}
	        </Hidden>
    		<Hidden only={['xs', 'md', 'lg', 'xl']}>
    			{sm}
	        </Hidden>
    		<Hidden only={['xs', 'sm', 'lg', 'xl']}>
    			{md}
	        </Hidden>
    		<Hidden only={['xs', 'sm', 'md', 'xl']}>
    			{lg}
	        </Hidden>
    		<Hidden only={['xs', 'sm', 'md', 'lg']}>
    			{xl}
	        </Hidden>
		</>
	)
}

export default UIProxy;