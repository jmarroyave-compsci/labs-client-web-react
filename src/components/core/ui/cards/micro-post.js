import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

export const MediaCard = ( props ) => {
  	var { title, subtitle, text, image, actions, imageHeight, noImage } = props;
    image = (image) ? image : 'https://dummyimage.com/${(imageHeight) ? imageHeight : 300}';

    return (
        <Card>
          <CardHeader 
            title={title}
            subheader={subtitle}
          />
          {!noImage && image && 
            <CardMedia 
              height={(imageHeight) ? imageHeight : null} 
              image={image} 
            />
          }
          {(text && text.trim !== "") && 
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          }
          <CardActions>
            {(actions) && actions.map(item => 
              <div key={key++}>{item}</div>
            )}
          </CardActions>
        </Card>
    );

}