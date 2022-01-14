import React, { useEffect, useState } from 'react'
import Stack from 'com/ui/stack';
import HistoryItem from './history-item'

function HistoryData( { data, year, tagsSelected, onClick } ){
    const clickWord = (e) => {
      const w = findWord();
      if(!w || w.trim() == "") return;
      if(onClick) onClick(w)
    }

    const findWord = () => {
        var selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return true;
        var range = selection.getRangeAt(0);
        var node = selection.anchorNode;
        var word_regexp = /^\w*$/;

        // Extend the range backward until it matches word beginning
        while ((range.startOffset > 0) && range.toString().match(word_regexp)) {
          range.setStart(node, (range.startOffset - 1));
        }
        // Restore the valid word match after overshooting
        if (!range.toString().match(word_regexp)) {
          range.setStart(node, range.startOffset + 1);
        }

        // Extend the range forward until it matches word ending
        while ((range.endOffset < node.length) && range.toString().match(word_regexp)) {
          range.setEnd(node, range.endOffset + 1);
        }
        // Restore the valid word match after overshooting
        if (!range.toString().match(word_regexp)) {
          range.setEnd(node, range.endOffset - 1);
        }

        var word = range.toString();
        return word
    }

    const includesTag = ( { tags } ) => {
      if(!tagsSelected) return true;

      for(var tag of tags){
        if( tagsSelected[tag.type] && tagsSelected[tag.type].includes(tag.text) ) return true;
      }

      return false;
    }

    return (
      <React.Fragment>
          <div onClick={clickWord}>
            {Object.keys(data).map( y =>
              ( y == year || tagsSelected != null ) && data[y].map( (item, idx) => 
                includesTag(item) && <HistoryItem year={(tagsSelected) ? y : null} key={idx} item={item}/>
              )
            )}
          </div>
      </React.Fragment>
    )

}

export default HistoryData