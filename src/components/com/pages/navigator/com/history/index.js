import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import { Frame, Title, Subtitle } from 'style/component'
import { getHistory } from 'data/history';

function History(props){
    const context = useContext( ComponentContext );
    const current = context.state.parameters.decade;
    const ref = useRef(null)

    const history = getHistory() 
    const height = 400;

    useEffect( () => {
      const decade = ref.current.querySelector(`#hist-${current}`)
      decade.scrollIntoView({ block: "start", inline: "start"})
    }, [ current ])

    return (
      <Frame>
        <div ref={ref} style={{ height: `${height}px`, overflow: "scroll", margin: "0.5rem 0 0.5rem 0" }}>
        <Stack>
          <Title>History</Title>
          {Object.keys(history).map( decade => 
            <React.Fragment key={decade}>
              <a id={`hist-${decade}`}>
                <Subtitle>{decade}</Subtitle>
              </a>
              {Object.keys(history[decade]).map( year => 
                history[decade][year].map( (item, idx) => 
                  <div key={idx} >{item.date} - {item.event}</div>
                )
              )}  
              <br/>
            </React.Fragment>
          )}          
        </Stack>
        </div>
      </Frame>
    )

}

export default History