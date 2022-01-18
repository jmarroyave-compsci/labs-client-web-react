import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicResults from './results';
import { Frame, Title } from 'style/component'
import Help from "../help"

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, year } = context.state.parameters;
    const topicData = context.data.topic
    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div style={{flex: 0}}>
          <Title>Results for: {(topic) ? topic : "No topic selected"} <Help text="presents the search results for the word selected and the specified [decade]"/></Title>
          <br/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', flex: 1, overflow: 'hidden'}}>
          {topic && <TopicResults/>}
        </div>
      </Frame>
    )

}

export default Item