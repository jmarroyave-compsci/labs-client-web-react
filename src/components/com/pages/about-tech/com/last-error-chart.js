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

    var xData  = d3.extent( 
      data.map( c => new Date(c.date) ) 
    )    

    var yData  = d3.max( 
      data.map( c => c.failures ) 
    )    

    //console.log(xData, yData)

    /* Scale */
    var xScale = d3
      .scaleTime()
      .domain(xData)
      .range([0, width - margin]);

    var yScale = d3
      .scaleLinear()
      .domain([0, yData])
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
    let lines = svg.append("g").attr("style", "fill: none");

    lines
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", d3.line()
        .x(function(d) { return xScale(new Date(d.date)) })
        .y(function(d) { return yScale(d.failures) })
      )      
      .style("stroke", (d, i) => color(i))
      .style("stroke-width", lineStroke)
      .style("opacity", lineOpacity)


    /* Add circles in the line */
    lines
      .append("g")
      .style("fill", (d, i) => color(i))
      .selectAll("circle")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "circle")
      .append("circle")
      .attr("cx", d => xScale(new Date(d.date)))
      .attr("cy", d => yScale(d.failures))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)



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
