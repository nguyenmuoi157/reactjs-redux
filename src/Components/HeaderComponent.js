import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';
class HeaderComponent extends Component {

    togglenewtask() {
        this.props.toggletask();
    }
    render() {
        return (
            <div>


                <div className="form-group">
                    <button style={{ float: 'left' }} onClick={()=>this.togglenewtask()} type="button" className="btn btn-default">Thêm tác vụ &nbsp;

                    <i className="fa fa-plus"></i>
                    </button>
                    <br />

                </div>


                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Tìm kiếm</div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="nhập từ khoá tìm kiếm..." />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //data: state.TaskReducer
    }
}
const mapDispatchToProps = (dispatch, Props) => {
    return {
        toggletask: () => { dispatch(actions.toggleTask()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);