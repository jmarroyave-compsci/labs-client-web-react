import React, { Suspense, lazy } from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';

import Link from './link';
import Placeholder from './placeholder';
import MDAvatar from '@material-ui/core/Avatar';
import MDList from '@material-ui/core/List';
import MDListItem from '@material-ui/core/ListItem';
import MDListItemAvatar from '@material-ui/core/ListItemAvatar';
import MDListItemText from '@material-ui/core/ListItemText';
import MDListSubheader from '@material-ui/core/ListSubheader';
import MDDivider from '@material-ui/core/Divider';
import Loading from 'core/components/loading';

const FixedSizeList = lazy(() => import(/* webpackChunkName: "react-window" */ './external/fixed-size-list'));


import './assets/css/list.scss';

class List extends React.Component {
  constructor(){
    super();

    this.state = {
      msg : null,
      positions: [],
      items : [],
    }

    this.group = "";    
  }

  componentDidUpdate(prevProps) {
    if(prevProps.data !== this.props.data || prevProps.minItems !== this.props.minItems){
      this.setData(this.props.data);
    }
  }

  componentDidMount(){
    this.setData(this.props.data);
  }

  setData(data){
    var { maxItems, minItems, groupByLambda } = this.props;
    var msg = null;

    if(Array.isArray(data) || data == null){
      data = (data) ? data.slice(0,maxItems) : [];
    } else {
      msg = "data is not an array";
      data = null;
    }

    data = (data) ? data : [];

    minItems = (data.length < minItems) ? minItems : data.length;

    var items = [];
    var grp = null;
    for(var i = 0; i < minItems; i++){
      if(data.length > i){
        if(groupByLambda){
          var ngroup = this.props.groupByLambda(data[i]);
          if(grp != ngroup){
            grp = ngroup;
            items.push({type: 'grp', data: grp})
          }
        }
        items.push({type: 'item', data: data[i], idx: i})
      } else {
        items.push({type: 'ph', data: null})
      }
    }

    if(!msg && data.length == 0){
      msg = "no items"
    }
    
    //console.log("setdata", msg, items.length, data.length);

    this.setState({minItems: minItems, maxItems: maxItems, items: items, msg: msg})
  }

  render() {
  	var { displayItems, displayItemHeight, loading, summary, style } = this.props;
  	//console.log(this.state.msg)
    return (
        <Container className={'core-ui-list'} style={style}>
          {this.state.msg && !loading && <Overlay>{this.state.msg}</Overlay>}
          <div className={`${(this.state.msg) ? 'blur' : ''} list`}>
            {summary && 
              <div>
                  {`${this.state.items.length} record(s)`}
              </div>     
            }                                          
            {(displayItems > -1) ?
              this.renderVirtualList(displayItems, displayItemHeight)
              :
              this.renderList()
            }
          </div>
        </Container>
    );
  }

  renderVirtualList(displayItems, displayItemHeight){
    var items = this.state.items;  
    return (
      <Suspense fallback={<Loading/>}>
        <FixedSizeList height={displayItemHeight * displayItems} width={'100%'} itemSize={displayItemHeight} itemCount={items.length}>
          {({index, style}) => (
            this.renderListItem(items[index], (items.length > index + 1), style, index)
          )}
        </FixedSizeList>                    
      </Suspense>
    )
  }

  renderList(){
    var items = this.state.items;  
    return (
      <MDList>
        {items.map((item, idx)=>
          this.renderListItem(item, (items.length > idx + 1), {}, idx)
        )}
      </MDList>
    )
  }

  renderListItem(item, divider, style, key){
    return (
      <div style={style} key={key}>
        {this.renderNext(item)}
        {(divider) && <MDDivider/>}    
      </div>
    )
  }

  renderNext(item){
    if(this.props.loading) return <ListItemPlaceholder {...this.props}/>;
    if(item.type === "ph") return <ListItemEmpty {...this.props}/>;
    if(item.type === "grp") return <MDListSubheader className='item-subheader'>{item.data}</MDListSubheader>

    return this.renderItem(item)
  }

  renderItem(item){
    if(this.props.goToLambda){
      return (
        <Link border={false} to={this.props.goToLambda(item.data)}>
          <ListItem button item={item} {...this.props}/>
        </Link>         
      )
    } else {
      return (
        <ListItem item={item} {...this.props} />        
      )
    }
  }
}

function ListItemPlaceholder({avatarType}){
    return (
      <MDListItem>
          {(avatarType !== false && avatarType !== 'none') &&
	          <MDListItemAvatar><MDAvatar> </MDAvatar></MDListItemAvatar>
          }
          <MDListItemText primary={<Placeholder data={[[["-", 220, 10]]]}/>}/>
      </MDListItem>     
    )
}

function ListItemEmpty({avatarType}){
  return (
      <MDListItem>
          {(avatarType !== false && avatarType !== 'none') &&
	          <MDListItemAvatar><MDAvatar> </MDAvatar></MDListItemAvatar>
          }
          <MDListItemText primary={" "}/>
      </MDListItem>     
    )
}

function ListItem({item, button, avatarType, avatarLambda, primaryLambda, numbered, onItemClick}){
  var idx = item.idx;
  item = item.data;
  avatarLambda = (avatarLambda) ? avatarLambda : (item=>item);

  return (
      <MDListItem className='item' button={button} onClick={()=>(onItemClick) ? onItemClick(item)  : null}>
          {(numbered === true) && <div className='num'>{idx + 1}</div>}
          {(avatarType !== false && avatarType !== 'none') &&
            ((avatarType === "icon" || avatarType === "text") ?
              <MDListItemAvatar><MDAvatar>{avatarLambda(item)}</MDAvatar></MDListItemAvatar>
            :
              <MDListItemAvatar><MDAvatar src={avatarLambda(item)}></MDAvatar></MDListItemAvatar>
          )}
          <MDListItemText primary={primaryLambda(item)}/>
      </MDListItem>
    )
}

List.propTypes = {
	loading: PropTypes.bool,
	data: PropTypes.array,
	displayItems: PropTypes.number,
	maxItems: PropTypes.number,
	minItems: PropTypes.number,
	displayItemHeight: PropTypes.number,
	summary: PropTypes.bool,
	style: PropTypes.object,
	avatarType: PropTypes.oneOf(['false', 'none', 'icon', 'text']),
	primaryLambda: PropTypes.func,
	groupByLambda: PropTypes.func,
	avatarLambda: PropTypes.func,
	goToLambda: PropTypes.func,
	numbered: PropTypes.bool,
}

List.defaultProps = {
  loading: false,
  data: [],
  displayItems: -1,
  displayItemHeight: 60,
  maxItems: 500,
  minItems: 5,
  summary: false,
  style: {},
  avatarType: 'none',
  numbered: false,
};

export default List;

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 2;
    text-align: center;
    color: white;
`;
