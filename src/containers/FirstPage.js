import { connect } from 'react-redux';
import FirstPage from '../components/FirstPage';
import { asyncUpdateNum } from '../reducer/actions';

const mapStateToProps = (state, ownProps) => {
    const { num } = state;
    return {
        num
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncUpdateNum: (num) => dispatch(asyncUpdateNum(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);