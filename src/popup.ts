import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Popup: React.FC = () => {
  return (
    <div>
      <h1>My Extension Popup</h1>
      <p>This is the content of the popup.</p>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));

