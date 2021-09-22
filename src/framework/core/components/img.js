import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';

const styles = theme => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#efefef', 
    backgroundImage: `url('./res/img/pl/ph.svg')`, 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center center',
    width: 'auto',
    height: 'auto',
  }
});

class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lazy = ("lazy" in this.props) ? true : false;
    const preload = ("preload" in this.props) ? this.props.preload : null;
    const src = ("src" in this.props) ? this.props.src : null;
    const classes = this.props.classes;
    const style = ("style" in this.props) ? this.props.style : {};
    const height = ("height" in this.props && this.props.height) ? this.props.height : '';
    var width = '';

    if(height == '' && width == ''){
      width = '100%';
    }

    var img = <img src={src} width={width} height={height} style={{position: 'absolute', top: 0, left: 0, margin: '0px', padding: '0px', border: '0px'}}/>;

    if(lazy){
      img = <LazyLoad only>{img}</LazyLoad>;
    }

    return (
        <div>
          <div className={classes.container}>
            <img src={preload} width={width} height={height} style={{opacity: '1', margin: '0px', padding: '0px', border: '0px'}}/>
            {img}
          </div>
        </div>    
    )
  }

}

export default withStyles(styles)(ImgComponent);