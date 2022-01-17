import React, { useEffect, useMemo, useState } from 'react'
import Stack from 'com/ui/stack';
import { Frame, Small, Notes, Item  } from 'style/component'
import { Scrollbars } from 'react-custom-scrollbars';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import HistoryItem from './history-item'
import { styled } from '@mui/material/styles';

const Selected = styled('div')(({theme, width, height}) => ({
  backgroundColor: theme.palette.action.selected,
  margin: "0",
  padding: "0.5rem",
  color: theme.palette.text.primary,
  alignItems: 'center',
  whiteSpace: 'nowrap',  
  userSelect: 'none',
}));

const Tags = styled('div')(({theme, width, height}) => ({
  margin: "0",
  padding: "0.5rem",
  border: '1px solid',
  borderColor: theme.palette.action.selected,
}));

function TagParameters( { data, onClick} ){
    const [expanded, setExpanded] = useState( false )

    const groups = {
        "ORDINAL" : false,
        "PERCENT" : false,
        "NORP": false,
        "MONEY": false,
        "DATE" : false, 
        "CARDINAL": false,
        "QUANTITY": false,
        "LANGUAGE": false,
        "FAC": "FACT",
        "ORG": "ORGANIZATION",
        "LOC": "LOCATION",
        "GPE": "GPE",
        "WORK_OF_ART": "WORK OF ART",
    }

    const getTags = ( ) => {
        const tags = {}
        Object.keys( data ).forEach( year => {
          data[year].forEach( item => {
            item.tags.forEach( tag => {
              if(groups[tag.type] === false) return;
              const group = tag.type;
              tags[group] = (tags[group]) ? tags[group] : []
              tags[group].push(tag.text)
            })
          })
        }) 

        return tags;
    }

    const tags = useMemo( () => getTags(), [data] )
    const [tagsSelected, setTagsSelected] = useState( null )

    const onTagsSelected = ( group, v ) => {
      const newVal = (group) ? ( { [group] : v } ) : v 
      const resp = { ...tagsSelected, ...newVal }
      setTagsSelected( resp )

      const tmp = {}
      Object.keys(resp).forEach( k => {
        if(!resp[k] || resp[k].length == 0 ) return;
        tmp[k] = resp[k]
      })    

      if(onClick) onClick((Object.keys(tmp) == 0) ? null : tmp)
    }

    useEffect(()=> {
      if(!tags) return;
      setTagsSelected(initTags())
    }, [tags])


    const initTags = () => {
      const tagsInit = {}
      Object.keys(tags).forEach( k => tagsInit[k] = [])
      return tagsInit;      
    }

    if(!tagsSelected) return null;

    return (
      <div>
        <Selected style={{width: '100%'}} onClick={ () => setExpanded( !expanded ) }>
          <>
            {Object.keys(tagsSelected).reduce( (t,c) => t + tagsSelected[c].length, 0 ) == 0 ? 
                <Small>click here to select tags</Small> 
              : 
                <>
                  <TagsSelected data={tagsSelected}/>
                  <span style={{fontSize: "50%", cursor: 'pointer', userSelect: 'none'}} onClick={(e) => {
                      onTagsSelected(null, initTags()); 
                      setExpanded(false);
                      e.stopPropagation();
                  }}>
                    <span>[ clear all ]</span>
                  </span>                  
                </>
            }
          </>
        </Selected>
        { expanded &&
          <div style={{maxHeight: '300px', overflowY: 'scroll'}}>
          <Tags>
            {Object.keys(tags).map( group =>
                <React.Fragment key={group}>
                  <TagList 
                      value={tagsSelected[group]}
                      title={(groups[group] && groups[group] !== false) ? groups[group] : group} 
                      tags={tags[group]} 
                      onChange={( values ) => onTagsSelected( group, values )}
                    />
                </React.Fragment>
            )}
          </Tags>
          </div>
      }
      </div>
    )

}

function TagList({ group, title, tags, onChange, value }){
  const hasFilters = value.length > 0

  const _onChange = (v) => {
    if(onChange) onChange(v)
  } 

  return (
    <React.Fragment>
      <Small>{title}{hasFilters && <span style={{fontWeight: 800, cursor: 'pointer', userSelect: 'none'}} onClick={() => _onChange([])}> [ X ]</span>}{hasFilters && ":"} {value.join(", ")}</Small>
      <Scrollbars autoHeight>
        <div style={{ marginBottom: '1rem'}}>
          <ToggleButtonGroup                
            value={value}
            size="small"
            onChange={(e, v) => _onChange(v)}
            aria-label="text alignment"
          >
          {tags.map( (tag, idx) => 
            <ToggleButton key={idx} value={tag} aria-label="by year"><span style={{ whiteSpace: 'nowrap'}}>{tag}</span></ToggleButton>
          )}
          </ToggleButtonGroup>
        </div>
      </Scrollbars>
    </React.Fragment>
  )
}

function TagsSelected({data}){
  return (
      Object.keys(data).map( (k, idx) => 
          <React.Fragment key={idx}>
            {data[k].length > 0 &&               
                <div style={{width: '100%', whiteSpace: 'wrap', paddingBottom: "0.5rem"}}>
                  <div style={{lineHeight: "0.6rem", fontSize: '0.5rem', padding: 0}}>{k}</div>
                  <div style={{lineHeight: "0.75rem", fontSize: '0.7rem', padding: 0}}>{data[k].join(", ")}</div>
                </div>
            }
          </React.Fragment>      
      )
  )
}

export default TagParameters

