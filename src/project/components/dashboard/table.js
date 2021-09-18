import React from 'react';
import PropTypes from 'prop-types';
import _Table from 'core/ui/table'
import PanelCard from 'core/ui/cards/panel';
import tableMapAdapter from 'components/data/table-map-adapter'

class Table extends React.Component {
  render() {
    return (
      <PanelCard >
        <_Table {...this.props} showHeader={false}/>
      </PanelCard>

    );
  }
}

export default tableMapAdapter(Table);

