import React from 'react';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';

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