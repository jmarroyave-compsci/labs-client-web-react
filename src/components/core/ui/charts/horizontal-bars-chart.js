import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import ResponsiveWrapper from 'core/ui/components/responsiveness';
import * as format from 'core/lib/format';

import {
  whiteColor,
} from "core/ui/theme";

import classNames from "classnames";
import { withStyles } from "@mui/styles";

const styles = {
  grid: {
    stroke: "#9FAAAE",
    strokeOpacity: "0.1",
    strokeDasharray: "2",
  },
};

class HorizontalBarsChart extends Component {

    plot(data, svg, width, height, onBarClick, interactive) {
        const { classes, small } = this.props;

        var y = d3.scaleBand()
                  .range([height, 0])
                  .padding(0.25);

        var x = d3.scaleLinear()
                  .range([0, width]);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        x.domain([0, d3.max(data, function(d){ return d.value; })])
        y.domain(data.map(function(d) { return d.label; }));

        const lineOpacity = (interactive) ? "1" : "0.5";
        const lineOpacityHover = (interactive) ? "0.75" : lineOpacity;
        const lineOpacityClicked = (interactive) ? "1" : lineOpacity;;
        const otherLinesOpacityHover = (interactive) ? "0.25" : lineOpacity;;

        svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("width", function(d) {return x(d.value); } )
          .attr("y", function(d) { return y(d.label); })
          .attr("height", y.bandwidth())
          .style('fill', (d, i) => (small) ? colorScale(i) : colorScale(i))
          .style("opacity", lineOpacity)
          .on("mouseover", (d, i) => {
            if(!interactive) return

            //console.log("mouseover")
            d3.select(d.target.parentNode).selectAll(".bar")
                .style("opacity", otherLinesOpacityHover);
            d3.select(d.target)
                .style("opacity", lineOpacityHover)            
          })
          .on("mouseout", (d, i) => {
            if(!interactive) return
            setTimeout( ()=>{
                d3.select(d.target.parentNode).selectAll(".bar")
                    .style("opacity", lineOpacity);
            }, 1000)
          })
          .on("click", (d, i) => {
            if(!interactive) return
            d3.select(d.target)
                .style("opacity", lineOpacityClicked);
            if(onBarClick)
                onBarClick(d, i)
          })

        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(
            d3.axisBottom(x)
            .ticks(3)
            .tickFormat( (d,i) => format.number(d, "0a") )
            );

        svg.append("g")
          .call(
            d3.axisLeft(y)
            );


        svg.append('g')
            .attr('class', classes.grid)
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom()
                .scale(x)
                .tickSize(-height, 0, 0)
                .tickFormat('')
            )

        svg.append('g')
            .attr('class', classes.grid)
            .call(d3.axisLeft()
                .scale(y)
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )

    }

    drawChart() {
        const { parentWidth, parentHeight, small } = this.props;
        var { data, width, height, onBarClick } = this.props;

        width = (width) ? width : Math.max(parentWidth, width);
        width = (width <= 0) ? 300 : width;

        //height = (height) ? height : Math.max(parentHeight, height);

        // format the data
        data.forEach(function(d) {
            d.value = +d.value;
        });

        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const margin = {
            top: 10,
            bottom: 20,
            left: this.props.marginLeft,
            right: 30,
        };

        const chart = svg.append('g')
            .classed('display', true)
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom
        this.plot(data, chart, chartWidth, chartHeight, onBarClick, this.props.interactive);

        return el.toReact();
    }

    render() {
        const { data } = this.props;

        if(!data) return "no data";

        return this.drawChart();
    }
}

HorizontalBarsChart.propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    small: PropTypes.bool,
    marginLeft: PropTypes.number,
    onBarClick: PropTypes.func,
}

HorizontalBarsChart.defaultProps = {
    data: [],
    width: null,
    height: 100,
    small: false,
    marginLeft: 80,
    onBarClick: null,
}

HorizontalBarsChart = ResponsiveWrapper(HorizontalBarsChart);
HorizontalBarsChart = withStyles(styles)(HorizontalBarsChart);
export default HorizontalBarsChart;
