'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import './search.css'
import './search.less'
import cat from './images/cat.jpg'

class Search extends React.Component {
    render() {
        return (
            <div className="search-text">
                Search-Text
                <img src={cat} />
            </div>
            
        )
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));