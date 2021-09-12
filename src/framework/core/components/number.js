import React from 'react';
import UIComponent from 'core/components/ui_component';
import numeral from 'numeral';


//http://numeraljs.com/

class UINumber extends UIComponent { 
  render() {
    const num = (this.props.value === '') ? '' : numeral(Number(this.props.value)).format('0a');
    return (
      <span>{num}</span>
    );
  }
}

export default UINumber;