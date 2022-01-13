import React from 'react'
import Stack from 'com/ui/stack';
import { Small, Notes, Item  } from 'style/component'
import { Scrollbars } from 'react-custom-scrollbars';

function YearsParameters( { data, year, onClick} ){
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

    return (
      <React.Fragment>
        <Scrollbars autoHide style={{flex: 1}}>
          <div onClick={clickWord}>
            {year && data[year].map( (item, idx) => 
              <div key={idx} >
                <div><Notes>{item.date}</Notes></div>
                <div><Small>{item.event}</Small></div>
              </div>
            )}
          </div>
        </Scrollbars>
      </React.Fragment>
    )

}

export default YearsParameters