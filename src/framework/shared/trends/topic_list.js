import React from 'react';
import { styled } from '@mui/material/styles';
import List from 'core/ui/list';
import Icon from './topic_icon';
import uris from './uris';

import './topic_list.scss';

const ActionsContainer = styled('div')({
    padding: '1.5rem 1rem',
    color: 'white',
    backgroundColor: '#333',
`});


function TopicList({id, numbered, border, colored, data, trend, links, title, subtitle, actions, groupByLambda, defaultIcon, displayItems, minItems, useDefaultIcon}) {	
    var goToLambda = (links === true) ? ((item)=> uris.getLinkToTopic(trend, item[id])) : null;
    useDefaultIcon = (useDefaultIcon) ? useDefaultIcon : 'default';
    return (
        <div className={`topic_list ${(border === true) ? 'border' : ''}`}>
            {(title || subtitle) &&
                <div className={`header ${(colored === true) ? 'colored' : ''}`}>
                    {(title) && <h4>{title}</h4>}
                    {(subtitle) && <h6>{subtitle}</h6>}
                </div>
            }
            <List 
              loading={(!data)}
                numbered={numbered}
                minItems={minItems}
                data={data} 
                primaryLambda={(item)=>item[id]} 
                avatarLambda={(item)=><Icon name={(defaultIcon === true) ? 'default' : item[id]}/>} 
                avatarType={"icon"}
                goToLambda={goToLambda}
                groupByLambda={groupByLambda}
                displayItems={displayItems}
            />    
            {links && actions && actions.length > 0 &&
                <ActionsContainer>
                    {actions.map((item, idx)=>
                        <React.Fragment key={idx}>
                            {item}
                        </React.Fragment>
                    )}
                </ActionsContainer>  
            }
        </div>

    )
}

export default TopicList;