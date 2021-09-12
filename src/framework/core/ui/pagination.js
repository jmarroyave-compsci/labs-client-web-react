import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import Button from 'core/ui/button';

class Pager extends React.Component {
  render(){
    var { activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, onPageChange } = this.props;

    if (!activePage || activePage == 0 || !totalItemsCount || totalItemsCount == 0) return <div/>;

    itemsCountPerPage = (itemsCountPerPage && itemsCountPerPage > 0 ) ? itemsCountPerPage : 10;
    var totPages = Math.floor(totalItemsCount / itemsCountPerPage);
    var pages = []; for(var i = 1; i <= totPages; i++) pages.push(i);
    pageRangeDisplayed = (pageRangeDisplayed) ? pageRangeDisplayed : 10;

    if (totPages <= 1) return <div/>;

    activePage = parseInt(activePage); 
    var delta = parseInt(pageRangeDisplayed / 2);
    var ini = (activePage - delta > 0) ? activePage - delta : 1;
    pages = pages.slice(ini - 1, ini + pageRangeDisplayed - 1);

    //console.log("paging", totPages, activePage, pageRangeDisplayed, delta, ini);

    return (
      <div style={{textAlign: 'center'}}>
        {(activePage > 1) && <Button icon={'previous'} onClick={()=>onPageChange(activePage - 1)}/>}
        <span>{pages.map((pg, idx)=>
          (pg == activePage) ? <span key={idx} style={{cursor: 'default', fontSize: '1rem', fontWeight: 'bold', padding: '0 1.5rem'}}>{activePage}</span> : <Button key={idx} onClick={()=>onPageChange(pg)}>{pg}</Button>            
        )}
        </span>          
        {(activePage < totPages) && <Button icon={'next'} onClick={()=>onPageChange(activePage + 1)}/> }
      </div>
    )    
  }
}

export default Pager;

