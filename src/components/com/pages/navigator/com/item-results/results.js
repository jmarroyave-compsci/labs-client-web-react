import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import Results from 'com/pages/search/com/results';
import { Scrollbars } from 'react-custom-scrollbars';

function ItemResults(props){
    const context = useContext( ComponentContext );
    const { topic, year, page } = context.state.parameters;
    const resultsData = context.data.results
    return (
      <Scrollbars>
        <Results
            params={{qry : topic, page: page}}
            page={page}
            onPageChange={(page) => context.dispatch( { type: "CHANGE_RESULTS_PAGE", payload: page } ) }
            data={resultsData.records}
            showFilters={false}
            showLegend={false}
        />
      </Scrollbars>
    )
}

export default ItemResults