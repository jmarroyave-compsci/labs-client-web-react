import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Link from 'core/ui/link';

import './footer_links.scss';

export default function FooterLinks({links}) {
  	var idx = 0;
    return (
		<GridContainer spacing={1} className='mod-footer'>
			{links.map(section=>
				<GridItem key={idx++} xs={12} sm={6} md={4}>
					<h3 className='section'>{section.name}</h3>
					<GridContainer spacing={1}>
						{section.items.map(item=>
							<GridItem key={idx++} xs={6} sm={12}>
								<Link border={false} className='link' to={item.link}>{item.name}</Link>
							</GridItem>
						)}				
					</GridContainer>		
				</GridItem>
			)}
		</GridContainer> 
    );
}