import React from 'react'
import { styled } from '@mui/material/styles';
import { getBy } from 'data/stories';
import Stack from 'com/ui/stack';
import Paper from '@mui/material/Paper';
import Link from 'core/ui/link';


const Panel = styled('div')( ({theme, img}) =>({
  color: theme.palette.text.primary, 
  backgroundColor: theme.palette.background.paper, 
  padding: '1rem',
}));

const Stories = styled('div')({
  fontSize: '1.5rem',
  paddingBottom: '0.5rem',
  color: 'inherit',
});

const Story = styled('div')({
  fontSize: '0.9rem',
  color: 'inherit',
});

const RelatedStories = function( props ){
    const { filter, breadcrumbs } = props;
    const stories = getBy( filter, breadcrumbs );
    return (
    <Paper>
        <Panel>
            <Stories>See also</Stories>
                {stories.slice(0,5).map( (story, idx) => 
                    <Story key={idx}><Link href={story.url}>{story.title}</Link></Story>
                )}
        </Panel>
    </Paper>
    )
}

export default RelatedStories;