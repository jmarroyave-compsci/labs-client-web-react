import React from 'react'
import { Timeline, TimelineItem } from 'core/ui/timeline';
import { getRoadmap } from 'data/roadmap';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import { Title } from 'style/infography'

class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;

    return this.renderTemplate(data);
  }

  renderTemplate( data ){
    return (
      <Timeline data={buildData()} />
    )
  }

}

function buildData(){
  var resp = [];

  var log = getRoadmap();

  Object.keys(log.log).reverse().forEach( sprint => {
    //if( sprint != "Sprint 3") return;


    Object.keys(log.log[sprint]).reverse().forEach( day => {
      //if( day != "Day 6") return;

      var item = { date: `${sprint}-${day}`, text: day, title: day, subtitle: null, info: [], iconColor: "info", icon: "circle" };
      item.info.push("<ul>")
      var tasks = []
      log.log[sprint][day].map( m => {        
        //console.log(m, tasks.find( (item) => (item == m) ));
        if ( tasks.find( (item) => (item.task == m.task) ) ) return;
        tasks.push(m);
        item.info.push(`<li>${m.task}</li>`)
      })
      item.info.push("</ul>")
      item.info = item.info.join("")
      resp.push( item )
    })

    resp.push( { date: sprint, title: sprint, subtitle: null, info: null, iconColor: "primary", contentColor: "primary", icon: "star" } )

  })

  return resp;
}


function buildData2(){
  var resp = [];

  Object.keys(log.log).reverse().forEach( sprint => {
    resp.push( { date: sprint, text: sprint, subtitle: null, info: null, iconColor: "primary", contentColor: "primary", icon: "star" } )
    Object.keys(log.log[sprint]).reverse().forEach( day => {
      var item = { date: `${sprint}-${day}`, text: day, title: day, subtitle: null, info: [], iconColor: "info", icon: "circle" };
      item.info.push("<ul>")
      log.log[sprint][day].map( m => {
        var cat = m.task;
        m.children.map( subTask => {
          item.info.push(`<li>${cat} - ${subTask.task}</li>`)
        })
      })
      item.info.push("</ul>")
      item.info = item.info.join("")
      resp.push( item )
    })
  })

  return resp;
}

export default Dashboard;