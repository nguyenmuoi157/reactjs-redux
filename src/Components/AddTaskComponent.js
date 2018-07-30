import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';


class AddTaskComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            task: {
                id: 0,
                name: '',
                status: false,
                onEdit: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    onAddItem(task) {
        task.id = this.props.tasks.data.length + 1;
        task.status = false;
        //console.log(task);
        this.props.onAddTask(task);
        this.setState({
            task: { ...this.state.task, name: '' }
        });
    }

    handleChange(event) {
        this.setState({
            task: {
                ...this.state.task,
                name: event.target.value
            }

        });
    };

    toggleButton() {
        this.props.toggleNewTassk();
    };

    render() {
        console.log(this.props.tasks);
        // this.props.tasks.data.forEach(element => {
        //     if(element.onEdit){
        //         this.setState({
        //             task:{...element}
        //         });
        //     }
        // });
        return (

            <div>
                <div className="card">
                    <div className="card-header">
                        Thêm mới tác vụ &nbsp;&nbsp;&nbsp;&nbsp;
                <i onClick={() => this.toggleButton()} className="fa fa-times-circle" />
                    </div>
                    <div className="card-body">

                        <div className="form-group">
                            <input className="form-control" id="" value={this.state.task.name} onChange={this.handleChange} placeholder="Nhập tên tác vụ" type="text" />
                        </div>
                        <button type="button" onClick={() => this.onAddItem(this.state.task)} className="btn btn-success">Thêm</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger">Huỷ</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer

    }
}
const mapDispatchToProps = (dispatch, Props) => {
    return {
        onAddTask: (task) => dispatch(actions.additem(task)),
        toggleNewTassk: () => dispatch(actions.toggleTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);