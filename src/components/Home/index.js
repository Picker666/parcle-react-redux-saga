import React, { Component } from 'react';

class Home extends Component {
    constructor () {
        super ()
    }

    handleChange = (e) => {
        const value = e.target.value;
        const { updateNum } = this.props;
        updateNum && updateNum(value);
    }

    handleIncrease = () => {
        const { updateNum, num } = this.props;
        updateNum && updateNum(num + 1);
    }

    handledecrease = () => {
        const { updateNum, num } = this.props;
        updateNum && updateNum(num - 1);
    }

    render () {
        const { num } = this.props;
        return <div>
            <p><input type="text" onChange={this.handleChange} value={num}/></p>
            <p>
                <button onClick={this.handleIncrease}>增加</button>
                <button onClick={this.handledecrease}>减少</button>
            </p>
            <p>{'this is home page!!!'}</p>
        </div>
    }
}

export default Home;