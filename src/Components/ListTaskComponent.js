import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';
class ListTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onDeleteitem(id) {
        this.props.onDeleteTask(id);
    }
    onEditItem(id) {
       this.props.onEditTask(id);
    }
    render() {
        // console.log(this.props.data);
        return (
            <div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td><b>stt</b></td>
                            <td><b>Tên công việc</b></td>
                            <td><b>Trạng thái</b></td>
                            <td><b>thao tác</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.status ? 'Hoàn thành' : 'chưa hoàn thành'}</td>
                                        <td>
                                            <button type="button" onClick={() => this.onDeleteitem(item.id)} className="btn btn-danger">Xoá</button>
                                            &nbsp;
                                            <button type="button" onClick={() => this.onEditItem(item.id)} className="btn btn-warning">Sửa</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.TaskReducer
    }
}
const mapDispatchToProps = (dispatch, Props) => {
    return {
        onDeleteTask: (id) => { dispatch(actions.deletetask(id)); },
        onEditTask: (id) => { dispatch(actions.editItem(id)); }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTaskComponent);