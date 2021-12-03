import React from 'react';
import MDCard from '@mui/material/Card';
import MDCardContent from '@mui/material/CardContent';
import MDCardHeader from '@mui/material/CardHeader';

class List extends React.Component {
  render() {
  	var { content, title, className } = this.props;
    var key = 0;

    return (
        <MDCard className={className}>
          <MDCardHeader className="header" title={title}/>
          <MDCardContent>
            {content}
          </MDCardContent>
        </MDCard>
    );
  }

}

export default List;