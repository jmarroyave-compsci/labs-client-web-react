import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MDCard from '@material-ui/core/Card';
import MDCardActions from '@material-ui/core/CardActions';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardMedia from '@material-ui/core/CardMedia';
import MDCardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: '#efefef',
  }
});

class List extends React.Component {
  render() {
  	var { classes, title, text, image, className, style, actions } = this.props;
    var key = 0;

    style = (style) ? style : {};
    style.display = 'flex';
    style.flexDirection = 'column';

    return (
        <MDCard className={className} style={style}>
          <MDCardHeader title={title}/>
          {image &&
            <MDCardMedia className={classes.media} image={image} />
          }
          <MDCardContent style={{flex: 1}}>
            {text}
          </MDCardContent>
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