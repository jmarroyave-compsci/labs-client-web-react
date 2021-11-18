import React, {useState, useEffect} from 'react';
import EntityItems from 'com/entities/entity/items';
import { fetchData } from 'com/pages/dashboard/automata'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, showBottomSheet } from 'app' 

function BottomSheetData(props) {
  const dispatch = useDispatch()
  const state = useSelector(( state ) => state['dashboard'] ) 
  const { query } = props;

  const getParams = (page) => { 
    return {
    op: query.op,
    type: query.type,
    page: page,
  }}

  const fetch = ( page=1 ) => dispatch( fetchData( getParams( page ) ) )

  useEffect(()=>{
    if(query == null) return;
    fetch()
  }, [query])

  useEffect( () => {
    if(query == null) return
    if(state == null) return
    dispatch( showBottomSheet( { 
        title: query.title, 
        children: <EntityItems 
                    page={state.params.page}  
                    loading={state.loading} 
                    data={state.data} 
                    type={query.type}
                    format="grid"
                    onPageChange={ ( page ) => fetch( page) } 
                    pageSize={4}
                    noPaging={false}
                  />,
      }) 
    )
  }, [ state ])

  useEffect( () => {
    if(!state) return
    dispatch( setLoading( { status: state.loading, sender: "dashboard" } ) )
  }, [ state?.loading ])

  return null
}

BottomSheetData.propTypes = {
};

export default BottomSheetData;
