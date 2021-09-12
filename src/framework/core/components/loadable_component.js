import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'core/ui/loading';

export default function LoadableComponent(props) {
  const LazyComponent = React.lazy(() => import(`${__dirname}/../../../project/${props.uri}`));
  return (
	    <React.Suspense fallback={<Loading/>}>
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