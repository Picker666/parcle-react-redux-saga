import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class HelloWorld extends Component {
    constructor () {
        super()
    }

    render () {
        const { name } = this.props;
        return <div className={styles.content}>{`Hello, ${name} ！！！`}</div>
    }
}

const mountNode = document.getElementById("root");
ReactDOM.render(<HelloWorld name="Picker" />, mountNode);