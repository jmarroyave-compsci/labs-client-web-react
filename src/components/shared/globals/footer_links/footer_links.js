import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Link from 'core/ui/link';

export default function FooterLinks({links}) {
  	var idx = 0;

    return (
		<GridContainer>
			{Object.keys(links.footer).map( section =>
				<GridItem key={idx++} xs={12} sm={6} md={4}>
					<h3>{section}</h3>
					<GridContainer>
						{links.footer[section].map(item=>
							<GridItem key={idx++} xs={12} sm={12}>
								<Link border={false} className='link' to={item.url}>{item.name}</Link>
							</GridItem>
						)}				
					</GridContainer>		
				</GridItem>
			)}
		</GridContainer> 
    );
}