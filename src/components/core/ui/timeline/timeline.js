import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from "@mui/material/Icon";
import { useTheme } from '@mui/material/styles';

export const Timeline = function( { data } ) {  
  return (
    <VerticalTimeline>
      {data.map( (d, idx) => 
        <TimelineItem key={idx} {...d}/>
      )}
    </VerticalTimeline>
  );
}

export const TimelineItem = function( {text, title, subtitle, info, date, iconColor, icon, contentColor, contentArrowColor} ){
  var theme = useTheme()

  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
        contentArrowStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
        date={date}
        iconStyle={(iconColor) ? { color: theme.palette.text.secondary } : {}}
        icon={<Icon style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</Icon>}
      >
        {title && <h3 className="vertical-timeline-element-title">{title}</h3>}
        {subtitle && <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>}
        {info && <p dangerouslySetInnerHTML={{__html:info}}>

        </p>}

      </VerticalTimelineElement>
  )

}

Timeline.Item = TimelineItem;
