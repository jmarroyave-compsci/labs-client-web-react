import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import Results from 'com/pages/search/com/results';
import { Scrollbars } from 'react-custom-scrollbars';

function ItemResults(props){
    const context = useContext( ComponentContext );
    const { topic, decade, page } = context.state.parameters;
    const resultsData = context.data.results

    return (
      <Scrollbars>
        <div>
          <div style={{textAlign: 'center', width: '100%', marginBottom: '1rem'}}>
            {(resultsData.complete) ? `[ no results found on ${decade}'s ]` : `[ ${decade} - ${parseInt(decade) + 10} ]`}
          </div>
          <Results
              params={{qry : topic, page: page}}
              page={page}
              onPageChange={(page) => context.dispatch( { type: "CHANGE_RESULTS_PAGE", payload: page } ) }
              data={resultsData.records}
              showFilters={false}
              showLegend={false}
          />
        </div>
      </Scrollbars>
    )
}

export default ItemResults