import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import ResponsiveWrapper from 'core/ui/components/responsiveness';

function BarChart({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        if(!data || data.length == 0) return;
        console.log("voy", data);
        
        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, height-100]);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }

    if(!data || data.length == 0) return "no data";

    return (        
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

BarChart.propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
}

BarChart.defaultProps = {
    data: [],
    width: 600,
    height: 500,
}


export default ResponsiveWrapper(BarChart)
