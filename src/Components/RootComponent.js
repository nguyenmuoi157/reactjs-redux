import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import ListTaskComponent from './ListTaskComponent';
import AddTaskComponent from './AddTaskComponent';
import {connect} from 'react-redux';
//import * as actions from '../Actions/index';

class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    addtask = () => {
        return (
            this.props.data.isnewtask ? <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <AddTaskComponent /> </div> : <div></div>
        )
    }

    render() {

        return (

            <div className="container-fuild">
                <div className="row">
                    {this.addtask()}
                    <div className={this.props.data.isnewtask ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <HeaderComponent />
                    </div>
                </div>
                <div>
                    <ListTaskComponent />
                </div>
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
        //onDeleteTask: (id) => {dispatch(actions.deletetask(id));}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RootComponent)