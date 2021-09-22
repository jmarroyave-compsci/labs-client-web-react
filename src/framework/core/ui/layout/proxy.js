import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import withModule from '../../components/with-module';

class PageComponent extends React.Component {
	render(){
		var { xs, sm, md, lg, xl } = this.props;

		xs = (xs) ? xs : null;
		sm = (sm) ? sm : xs;
		md = (md) ? md : sm;
		lg = (lg) ? lg : md;
		xl = (xl) ? xl : lg;

		return (
			<div style={{width:'100%'}}>
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
			</div>
		)
	}
}

export default withModule(PageComponent);
