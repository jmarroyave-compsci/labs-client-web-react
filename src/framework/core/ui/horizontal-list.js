import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import Placeholder from 'core/ui/placeholder';


class HorizontalList extends React.Component {
  render(){    
    const { data, loading } = this.props;
    if(!data || loading) return this.renderPlaceholder();
    return this.renderContent(data);
  }

  renderContent(data){
    return this.renderTemplate(data);
  }

  renderPlaceholder(){
    var items = []
    new Array(1,2,3).map((item, idx)=>items.push(<Placeholder data={[[["-", "80", "10"]]]}/>))
    return this.renderTemplate(items);
  }

  renderTemplate(items){   
  	return (
  		<Container>
  			{items.map((item, idx) =>
  				<ContainerItem key={idx}>
  					{item}
  				</ContainerItem>
			)}
  		</Container>
	)
  }
}


HorizontalList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

HorizontalList.defaultProps = {
  loading: false,
};

export default HorizontalList;

const Container = styled.div`
  width: 100%;
  flex-orientation: column;
  display: flex;
  margin: 0;
  padding: 0;
  overflow: auto;
  box-sizing: border-box;
`;

const ContainerItem = styled.div`
	border: 1px solid #c0c0c0;
	padding: 0rem;
	padding-right: 0.5rem;
	max-width: 100%;
	box-sizing: border-box;
`;



