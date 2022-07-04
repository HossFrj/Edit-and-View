import React from 'react';
import ReactDOM from 'react-dom';
import Document from './doc-container';

function App() {
    return (
        <div className="App">
            <Document />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
