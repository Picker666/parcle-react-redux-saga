import { connect } from 'react-redux';
import Home from '../components/Home';
import { updateNum } from '../reducer/actions';

const mapStateToProps = (state, ownProps) => {
    const { num } = state;
    return {
        num
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNum: (data) => dispatch(updateNum(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);