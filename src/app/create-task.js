import React, { Component } from 'react';

class TaskCreator extends Component {
    handleOnChange(event){
         if (event.target.type === "checkbox") {
            this.props.dataBind('isDone', event.target.checked);
         } else {
            this.props.dataBind('title',  event.target.value);
         }       
    }
    render(){
        let { task } = this.props;
        return (
            <div>
                <hr/>
                Task Name 
                <input 
                    type="text"
                    placeholder="Task Name"
                    onChange={ this.handleOnChange.bind(this) }
                    value={task.title}
                />
                <br/>
                is done? 
                <input 
                    type="checkbox"
                    onChange={ this.handleOnChange.bind(this) }
                    checked={task.isDone}
                />
                <br/>
                <button onClick={this.props.callback}> add task </button>
                <hr/>
            </div>
        )
    }
}

export default TaskCreator;