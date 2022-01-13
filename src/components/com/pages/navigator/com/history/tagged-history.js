import React from 'react'
import Stack from 'com/ui/stack';
import { Small, Notes, Item  } from 'style/component'
import { Scrollbars } from 'react-custom-scrollbars';

function YearsParameters( { data, year, onClick} ){
    const clickWord = (w) => {
      if(typeof(w) !== "string") return;
      if(onClick) onClick(w.toLowerCase())
    }

    return (
      <React.Fragment>
        <Scrollbars autoHide style={{flex: 1}}>
          <div onClick={clickWord}>
            {year && data[year].map( (item, idx) => 
              <div key={idx} >
                {item.tags && item.tags.map( (tag, tdx) => 
                  <Item key={tdx} onClick={() => clickWord(tag.text)}>{tag.text}</Item>
                )}
              </div>
            )}
          </div>
        </Scrollbars>
      </React.Fragment>
    )

}

export default YearsParameters