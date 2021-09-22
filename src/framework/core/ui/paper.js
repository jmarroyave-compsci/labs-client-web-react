import React from 'react';

import MDPaper from '@material-ui/core/Paper';


class Paper extends React.Component {
  render() {
    var { children, className, elevation, style, fill } = this.props;

    style = (style) ? style : {};
    if(fill) {
      style.width = "100%";
    }

    return (
      <MDPaper className={className} style={style} elevation={elevation}>
        {children}
      </MDPaper>
    );
  }
}

export default Paper;