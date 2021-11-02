import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { isString } from 'core/lib/data'
import config from 'app/config'
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  headerContent: {
    width: '100%',
  },
  headerRoot: {
    width: '100%',
  },
}))


const IMAGE_PLACEHOLDER = `${config.APP.BASE_PATH}${config.DEFAULTS.IMAGE_PLACEHOLDER}`;
const onMediaFallback = event => event.target.src = IMAGE_PLACEHOLDER;

const MediaCard = (props) => {
    const classes = useStyles();
    var { title, subtitle, text, image, imageHeight=180, noImage, actions } = props;
    var key = 0;
    var subtitle = (subtitle) ? subtitle : "";
    noImage = (noImage) ? true : false;
    image = (image) ? image : config.DEFAULTS.IMAGE_PLACEHOLDER;

    return (
        <Card style={{flexGrow: 1, width: "100%"}}>
          <CardHeader sx={{width: "100%"}}
            classes={{ content: classes.headerContent, root: classes.headerRoot }}
            title={               
                  <Tooltip title={title} placement="bottom-start">
                    <div style={{display: 'inline-block', width: '100%'}}>
                      <Typography noWrap={true} variant='subtitle' style={{display: 'inline-block', width: '100%'}}>{title}</Typography>
                    </div>    
                  </Tooltip>
            }
            subheader={subtitle}
          />
          {!noImage && 
            <CardMedia 
              height={(imageHeight) ? imageHeight : null} 
              image={(image?.startsWith("/"))  ? `${config.APP.BASE_PATH}${image}` : image} 
              component="img"
              onError={onMediaFallback}
            />
          }
          {text  && 
            <CardContent>            
              { isString(text) ?
                  <Typography variant="body2" color="text.secondary" component="div">
                    {text}
                  </Typography>
                :
                  text
              }
            </CardContent>
          }
          { actions && actions.length > 0 && 
            <CardActions>
              { actions.map(item => 
                <div key={key++}>{item}</div>
              )}
            </CardActions>
          }
        </Card>
    );

}

export default MediaCard


