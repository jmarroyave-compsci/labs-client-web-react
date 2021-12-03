import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import config from 'app/config'

export default function MediaControlCard(props) {
  var { classes, title, text, image, className, style, actions, imageHeight, imageWidth } = props;
  const theme = useTheme();
  image = (image) ? image : config.DEFAULTS.IMAGE_PLACEHOLDER;
  imageWidth = (imageWidth) ? imageWidth : 100;
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <div>&nbsp;</div>
        </Box>        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        style={{ width: imageWidth}}
      />
    </Card>
  );
}
