import React from "react";

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                id: 2,
                description: 'Water the plants',
                done: true
            },
            {
                id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        'newTaskName': '',
        'taskBeingEdited': 0,
        'taskModifiedName': ''

    }
    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTask = e => {
        // 1. create a new task object
        let newTask = {
            'id': Math.random() * 10000 + 9999, // create random id
            'description': this.state.newTaskName, // pass description to description
            'done': false // set the done to false for new task
        }

        // 2. add the task to the back of the task list
        let currentValues = this.state.tasks;
        // 2.1 clone out all the tasks so far, and add the new task at the back
        let modifiedValues = [...currentValues, newTask];

        // 2.2 update the state
        this.setState({
            'tasks': modifiedValues,
            'newTaskName': ''
        })

    }
    checkTask = (taskId) => {
        // go through filter to find the id that match the taskId
        // [0] - cos we only want the first result
        let currentTask = this.state.tasks.filter(item => item.id === taskId)[0];

        // Clone the task
        let modifiedTask = { ...currentTask }; // use the ... to spread and clone the object

        // Modify the modifiedTask.done by inverting the true to false and vice versa
        modifiedTask.done = !currentTask.done;
        console.log(modifiedTask)

        // Insert the modifiedTask back into the array of data
        let modifiedList = this.state.tasks.map(item => {
            if (item.id !== taskId) {
                return item
            } else {
                return modifiedTask
            }
        })

        // Save this modifiedList into state
        this.setState({
            'tasks': modifiedList
        })
    }
    deleteTask = (taskId) => {
        // find the index of the task
        let taskIndex = this.state.tasks.findIndex( item => item.id === taskId );

        // make a copy and remove the task to be delete
        let modifiedList = [
            ...this.state.tasks.slice(0, taskIndex),
            ...this.state.tasks.slice(taskIndex + 1)
        ];

        // set it back to state
        this.setState({
            tasks: modifiedList
        })


    }
    displayTask(item) {
        return (
            <li key={item.id}>
                {item.description}
                <input type="checkbox" value={item.done === true} checked={item.done} onChange={
                    () => {
                        this.checkTask(item.id)
                    }
                    
                } />
                <button onClick={async () => {
                    this.setState({
                        taskBeingEdited: item.id,
                        taskModifiedName: item.description
                    })
                }}>Edit</button>
                <button onClick={
                    () => {
                        this.deleteTask(item.id)
                    }
                }>Delete</button>
            </li>
        )
    }
    displayEditTask = (item) => {
        return (
            <li key={ item.id }>
                <input
                    type="text"
                    name="taskModifiedName"
                    value={this.state.taskModifiedName}
                    placeholder="Enter new description"
                    onChange={this.updateForm}
                />
                <button
                    onClick={() => {
                        this.updateTask(t.id)
                        this.setState({
                            taskBeingEdited: 0,
                            // taskModifiedName:""
                        })
                    }}>
                    Update
                </button>
            </li>
        )
    }
    updateTask =(taskId)=>{
        // find the task using the taskId
        let currentTask = this.state.tasks.filter( item => item.id===taskId )[0];
        
        // clone the currentTask
        let modifiedTask = {...currentTask};

        // update the modifiedTask
        modifiedTask.description = this.state.taskModifiedName;

        // write back to the state.tasks
        let modifiedList = this.state.tasks.map( (item)=>{
            if (item.id !== taskId ) {
                return item
            } else {
                return modifiedTask
            }
        })

        // set back into state
        this.setState({
            tasks: modifiedList
        })
    }


    render() {
        return <React.Fragment>
            <h1>TODO LIST</h1>
            <ul>
                {
                    this.state.tasks.map((item) => (
                        this.state.taskBeingEdited !== item.id  ?
                            this.displayTask( item ) :
                            this.displayEditTask ( item )
                    ))
                }
            </ul>
            <div>
                <h2>Create new Task</h2>
                <div>
                    <label>Task Description</label>
                    <input type="text" name="newTaskName" value={this.state.newTaskName} onChange={this.updateForm} />
                    <button onClick={this.addTask}>Add</button>
                </div>
            </div>
        </React.Fragment>
    }
}