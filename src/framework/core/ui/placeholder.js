import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader'

class Placeholder extends React.Component {
  render() {
  	var { data, type, grow } = this.props;
	switch(type){
		case "title":
		case "=":
		case "+":
			data = [[["="]]];
			break;
		case "text-1-line":
			data = [[["=="]]];
			break;
		case "square":
			data = [[["-", "100", "100"]]];
			break;
		case "rect4:3":
			data = [[["-", "100", "75"]]];
			break;
		case "custom":
			break;
	}

  	data = this.renderPlaceholders(data);
  	const style = (grow) ? {} : {width: data.width, height: data.height};
    return (
		<ContentLoader style={style}
			height={data.height}
			width={data.width}
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#bcbcbc">
			{data.phs.map(item => item)}
		</ContentLoader>			
    );
  }

  renderPlaceholders(data){
  	var width = 0;
  	var ph, phs = [];
	var y = 0;
	var _ph;
	var key = 0;
	
	var pad = 4
	var block = {h: 20, w: 100}

	for(var i = 0; i < data.length; i++){
		var row = data[i];
		var x = 0, h = 0, maxH = 0;
		for(var j = 0; j < row.length; j++){			
			ph = row[j];
			ph[1] = parseInt(ph[1]);
			ph[2] = parseInt(ph[2]);
			switch(ph[0]){
				case "o":
					_ph = <rect key={key++} x={x} y={y} rx="0" ry="0" width={ph[1]} height={ph[2]} />;
					x += ph[1] + (((i + 1) < data.length && i > 0) ? pad : 0);
					h = ph[2];
					break;
				case "=":				
				case "==":				
					_ph = <rect key={key++} x={x} y={y} rx="0" ry="0" width={block.w * ph[0].length} height={block.h} />;
					x += (block.w * ph[0].length) + (((i + 1) < data.length && i > 0) ? pad : 0);
					h = block.h;
					break;
				case "-":				
				default:
					_ph = <rect key={key++} x={x} y={y} rx="0" ry="0" width={ph[1]} height={ph[2]} />;
					x += ph[1] + (((i + 1) < data.length && i > 0) ? pad : 0);
					h = ph[2];
					break;
			}
			width = (x > width) ? x : width;
			maxH = (h > maxH) ? h : maxH;
			phs.push(_ph);
		}
		y += maxH + (((j + 1) < row.length && j > 0) ? pad : 0);
	}
	return {height: y, width: width, phs: phs};
  }

}

Placeholder.propTypes = {
	data: PropTypes.array,
	type: PropTypes.string,
	grow: PropTypes.bool,
}

Placeholder.defaultProps = {
	type: 'custom',
	grow: true,
};

export default Placeholder;
