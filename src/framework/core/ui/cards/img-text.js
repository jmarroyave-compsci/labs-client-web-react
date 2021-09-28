import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MDCard from '@material-ui/core/Card';
import MDCardActions from '@material-ui/core/CardActions';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardMedia from '@material-ui/core/CardMedia';
import MDCardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: '#efefef',
  }
});

class List extends React.Component {
  render() {
  	var { classes, title, text, image, className, style, actions, imageHeight } = this.props;
    var key = 0;

    style = (style) ? style : {};
    style.display = 'flex';
    style.flexDirection = 'column';
    image = (image) ? image : 'https://dummyimage.com/${(imageHeight) ? imageHeight : 300}';
    return (
        <MDCard className={className} style={style}>
          <MDCardHeader 
            title={<Typography noWrap variant="h6" component="h4">{title}</Typography>}
            style={{ display: "block", overflow: "hidden"}}
          />
          <MDCardMedia className={classes.media} height={(imageHeight) ? imageHeight : null} image={image} />
          {(text && text.trim !== "") && <MDCardContent style={{flex: 1}}>
            {text}
          </MDCardContent>
          }
          <MDCardActions>
            {(actions) && actions.map(item => 
              <div key={key++}>{item}</div>
            )}
          </MDCardActions>
        </MDCard>
    );
  }

}

export default withStyles(styles)(List);