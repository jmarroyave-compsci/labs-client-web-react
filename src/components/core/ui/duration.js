import React from 'react';
import UIComponent from 'core/ui/ui_component.js';

class UIDuration extends UIComponent { 
  render() {
    const num = (this.props.value === '' || this.props.value === null) ? '' : this.durationToString(this.props.value) ;
    return (
      <span>{num}</span>
    );
  }


	durationToString(duration) {
		//console.log('duration', duration);

		if(!duration || Array.isArray(duration)) return "-";

	  var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

	  if(match === null) return duration;

	  match = match.slice(1).map(function(x) {
	    if (x != null) {
	        return x.replace(/\D/, '');
	    }
	  });

	  var hours = (parseInt(match[0]) || 0);
	  var minutes = (parseInt(match[1]) || 0);
	  var seconds = (parseInt(match[2]) || 0);

	  return `${(hours > 0) ? hours + ':' : ''}${minutes}:${seconds}` ;
	}

}

export default UIDuration;