import React from 'react';
import ReactDOM from 'react-dom';

const helloByCreateElement = React.createElement('div', {}, 'Hello World');

const HelloByFunction = () => {
  return <div>Hello World</div>;
};

class HelloByComponent extends React.Component {
  render () {
    return <div>Hello World</div>;
  }
}

class HelloByPureComponent extends React.PureComponent {
  render () {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(
  <React.Fragment>
    {helloByCreateElement}
    <HelloByFunction />
    <HelloByComponent />
    <HelloByPureComponent />
  </React.Fragment>,
  document.getElementById('container')
);
