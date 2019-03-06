import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './router';
import store from './store';
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
ReactDOM.render(
    <Provider store={store}>
        <div className={styles.app}>
            <HelloWorld name="Picker" />
            <Routers />
        </div>
    </Provider>
, mountNode);