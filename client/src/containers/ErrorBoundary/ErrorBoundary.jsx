import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch (error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ error, errorInfo });
  }

  render () {
    const { error, errorInfo } = this.state;

    if (error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
