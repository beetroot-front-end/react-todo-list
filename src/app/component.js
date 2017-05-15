import React, { Component } from 'react';
import TaskCreator from './create-task';

const tasks = [
    {
        title: 'Learn Css',
        isDone: true,
        id: 1
    },
    {
        title: 'Learn ReactJS',
        isDone: false,
        id: 2
    }
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTask: {
                title: 'test',
                isDone: true,
                id: 0
            },
            tasks 
        };
    }
    onCurrentTaskChange(key, value){

        this.setState({
            currentTask: { 
                ...this.state.currentTask, 
                [key]: value
            }
        });
    }
    onAddToList(){
        let id = Date.now();

        this.setState({
            tasks: [...this.state.tasks, 
                    {
                        ...this.state.currentTask, 
                        id
                    },
                   ],
            currentTask: {
                id: 0,
                title: '',
                isDone: false
            }
        })
    }
    render(){
        return (
            <section>
                <TaskCreator 
                    task={ this.state.currentTask } 
                    dataBind={ this.onCurrentTaskChange.bind(this) }
                    callback={ this.onAddToList.bind(this) } 
                />
                <ul>
                    { 
                        this.state.tasks.map(
                            (task, index) => <li key={index}>
                                    Title - {task.title};
                                    ID - {task.id};
                                    isDone: {task.isDone ? '+': '-'};
                                    </li>
                        )    
                    }
                </ul>
            </section>
        )
    }
}

export default App;