import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'core/ui/loading';

export default function LoadableComponent(props) {
  const { loadingComponent, uri } = props;
  const LazyComponent = React.lazy(() => import(`${__dirname}/../../../project/${uri}`));
  return (
	    <React.Suspense fallback={(loadingComponent) ? loadingComponent : <Loading/> }>
	      <LazyComponent/>
	    </React.Suspense>
  );
}

LoadableComponent.propTypes = {
  uri: PropTypes.string,
};

LoadableComponent.defaultProps = {
  uri: null,
};