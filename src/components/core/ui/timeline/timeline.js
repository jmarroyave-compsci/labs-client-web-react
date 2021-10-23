import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from "@material-ui/core/Icon";
import { useTheme } from '@material-ui/core/styles';

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
  var theme = useTheme();

  //console.log(theme.palette[contentColor])

  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={(contentColor) ? { background: theme.palette[contentColor].main, color: theme.palette[contentColor].contrastText } : {}}
        contentArrowStyle={ (contentArrowColor) ? { background: theme.palette[contentColor].dark, color: theme.palette[contentArrowColor].contrastText } : {}}
        date={date}
        iconStyle={(iconColor) ? { background: theme.palette[iconColor].main, color: theme.palette[iconColor].contrastText } : {}}
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
