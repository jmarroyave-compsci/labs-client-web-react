import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import ResponsiveWrapper from 'core/ui/components/responsiveness';
import { Element } from 'react-faux-dom';

class Chart extends React.Component {
  render() {
    return this.renderMultiChart();
  }

  renderMultiChart() {
    const el = new Element('div');

    var data = this.props.data;
    var margin = 50;

    var width = this.props.parentWidth - margin;
    width = (width > 500) ? 500 : width;
    var height = this.props.height;
    var duration = 250;

    var lineOpacity = "0.25";
    var lineOpacityHover = "0.85";
    var otherLinesOpacityHover = "0.1";
    var lineStroke = "5px";
    var lineStrokeHover = "7px";

    var circleOpacity = "0.85";
    var circleOpacityOnLineHover = "0.25";
    var circleRadius = 2;
    var circleRadiusHover = 2;

    /* Scale */
    var xScale = d3
      .scaleTime()
      .domain(d3.extent( 
        data.reduce( (tot, cur) => tot.concat( cur.values.map( c => c.date ) ) , [] )
       ))
      .range([0, width - margin]);

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(
        data.reduce( (tot, cur) => tot.concat( cur.values.map( c => c.price ) ) , [] )        
      )])
      .range([height - margin, 0]);

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    /* Add SVG */
    const svg = d3.select(el)
      .append("svg")
      .attr("width", width + margin + "px")
      .attr("height", height + margin + "px")
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    /* Add line into SVG */
    var line = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.price));

    let lines = svg.append("g").attr("style", "fill: none");

    lines
      .selectAll(".line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .append("path")
      .attr("class", "line")
      .attr("d", d => line(d.values))
      .style("stroke", (d, i) => color(i))
      .style("stroke-width", lineStroke)
      .style("opacity", lineOpacity)


    /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", (d, i) => color(i))
      .selectAll("circle")
      .data(d => d.values)
      .enter()
      .append("g")
      .attr("class", "circle")
      .append("circle")
      .attr("cx", d => xScale(d.date))
      .attr("cy", d => yScale(d.price))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)


    Object.keys(lines["_groups"][0][0]['children']).forEach( k => {
      const l = lines["_groups"][0][0]['children'][k]


      if(l.props.className && l.props.className.baseVal == 'line-group') return;

      const p = l.childNodes[l.childNodes.length - 1]

      if(!d3.select(p)._groups[0][0].childNodes[0]) return;
      
      const px = d3.select(p)._groups[0][0].childNodes[0].props
      
      lines.append("text")
        .text(l.__data__.name)
        .attr("class", "text")
        .style("fill", d3.select(l).style("fill"))
        .attr("x", parseInt(px.cx) + 5)
        .attr("y", px.cy)
        .style("font-size", "0.75rem")
    })

    /* Add Axis into SVG */
    var xAxis = d3.axisBottom(xScale).ticks(5);
    var yAxis = d3.axisLeft(yScale).ticks(5);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height - margin})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("fill", "#000")

    return el.toReact();
  }
}


export default ResponsiveWrapper(Chart)
