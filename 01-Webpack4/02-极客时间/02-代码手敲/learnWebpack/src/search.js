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
                搜索文字111
                <img src={cat} style={{ width: "100px", height: "100px" }} />
            </div>

        )
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));
