import React from 'react';

import Box from 'core/ui/box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

export const MediaCard = ( props ) => {
    var { title, subtitle, text, image, imageHeight, noImage, actions } = props;
    //image = (image) ? image : 'https://dummyimage.com/${(imageHeight) ? imageHeight : 300}';

    return (
      <Box>
        <Card>
          <CardHeader 
            title={title}
            subheader={subtitle}
          />
          {!noImage && 
            <CardMedia 
              height={(imageHeight) ? imageHeight : null} 
              image={image} 
            />
          }
          {text && text.trim() !== "" && 
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          }
          <CardActions>
            { actions &&  action.length > 0 && actions.map( (item, key) => 
              <div key={key++}>
                {item}
              </div>
            )}
          </CardActions>
        </Card>
      </Box>
    );

}