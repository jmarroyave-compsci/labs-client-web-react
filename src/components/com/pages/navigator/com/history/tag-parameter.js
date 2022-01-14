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
      const resp = { ...tagsSelected, [group] : v }
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
      initTags()
    }, [tags])


    const initTags = () => {
      const tagsInit = {}
      Object.keys(tags).forEach( k => tagsInit[k] = [])
      setTagsSelected(tagsInit)
    }

    if(!tagsSelected) return null;

    return (
      <div>
        <Selected style={{width: '100%'}} onClick={ () => setExpanded( !expanded ) }>
          <div>
            {Object.keys(tagsSelected).reduce( (t,c) => t + tagsSelected[c].length, 0 ) == 0 ? 
                <Small>click here to select tags</Small> 
              : 
                <TagsSelected data={tagsSelected}/>
            }
          </div>
        </Selected>
        { expanded &&
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
      Object.keys(data).map( k => 
          <div>
            {data[k].length > 0 &&               
                <div>
                  <Notes>{k}</Notes><br/>
                  <Small>{data[k].join(", ")}</Small>
                </div>
            }
          </div>      
      )
  )
}

export default TagParameters

