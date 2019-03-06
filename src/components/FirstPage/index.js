import React, { Component } from 'react';

class FirstPage extends Component {
    constructor () {
        super ()
    }
    handleChange = (e) => {
        const value = e.target.value;
        const { asyncUpdateNum } = this.props;
        asyncUpdateNum && asyncUpdateNum(value);
    }

    handleIncrease = () => {
        const { asyncUpdateNum, num } = this.props;
        asyncUpdateNum && asyncUpdateNum(num + 1);
    }

    handledecrease = () => {
        const { asyncUpdateNum, num } = this.props;
        asyncUpdateNum && asyncUpdateNum(num - 1);
    }

    render () {
        const { num } = this.props;
        return <div>
            <p><input type="text" onChange={this.handleChange} value={num}/></p>
            <p>
                <button onClick={this.handleIncrease}>异步增加</button>
                <button onClick={this.handledecrease}>异步减少</button>
            </p>
            <p>{'this is first page!!!'}</p>
        </div>
    }
}

export default FirstPage;