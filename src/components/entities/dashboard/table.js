import React from 'react';
import PropTypes from 'prop-types';
import _Table from 'core/ui/table'
import tableMapAdapter from './data/table-map-adapter'

class Table extends React.Component {
  render() {
    return (
        <_Table {...this.props} showHeader={false}/>
    );
  }
}

export default tableMapAdapter(Table);

