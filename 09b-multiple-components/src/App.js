import React from 'react'
import DisplayTask from './DisplayTask'
import AddTask from './AddTask'
import TaskEdit from './TaskEdit'

export default class App extends React.Component {
  // set up state
  state = {
    tasks: [
      {
        id: '1',
        task: 'Singalong',
        done: false,
      },
      {
        id: '2',
        task: 'Walk the Dog',
        done: false,
      },
      {
        id: '3',
        task: 'Dance',
        done: true,
      }
    ],
    'newTask': "",
    'submitted': false,
    'editedTaskName': "",
    'editedTaskId': "0"

  }
  // Form event handler
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
  addTask = e => {
    // 1. create a new task object
    let newTask = {
      'id': Math.random() * 10000 + 9999, // create random id
      'task': this.state.newTask, // pass description to description
      'done': false // set the done to false for new task
    }

    // 2. add the task to the back of the task list
    let currentValues = this.state.tasks;
    // 2.1 clone out all the tasks so far, and add the new task at the back
    let modifiedValues = [...currentValues, newTask];

    // 2.2 update the state
    this.setState({
      'tasks': modifiedValues,
      'newTask': ''
    })
  }
  setTaskToEdit=(item)=>{
    this.setState({
      editedTaskId : item.id,
      editedTaskName : item.task

    })
  }
  updateEditedTask=(item)=>{
    // find the task using the taskId
    let currentTask = this.state.tasks.filter( t => t.id===item.id )[0];
    let modifiedTask = {...currentTask}


    // Update the new task name
    modifiedTask.task = this.state.editedTaskName // pass description to description

    // Update the modified list
    let modifiedList = this.state.tasks.map( (t)=>{
      if (t.id !== item.id) {
        return t
      } else {
        return modifiedTask
      }
    })

    // 2.2 update the state and reset the editTaskId & editTaskName
    this.setState({
      'tasks': modifiedList,
      'editedTaskId': 0,
      'editedTaskName':""
    })
  }
  deleteTask = (taskId) => {
    // find the index of the task
    let taskIndex = this.state.tasks.findIndex(item => item.id === taskId);

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
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>NoFacebook</h1>
        </div>
        <div>
          <ul>
            {
              this.state.tasks.map((item) => {
                return (
                  this.state.editedTaskId !== item.id ?
                    <DisplayTask
                      item={item}
                      updateFormField={this.updateFormField}
                      checkTask = {this.checkTask}
                      setTaskToEdit={this.setTaskToEdit}
                      deleteTask={this.deleteTask}
                    />
                    :
                    <TaskEdit
                      item ={item}
                      editedTaskName ={this.state.editedTaskName}
                      updateFormField={this.updateFormField}
                      updateEditedTask={this.updateEditedTask}
                    />
                )
              })
            }
          </ul>
          <AddTask
            newTask={this.state.newTask}
            updateFormField={this.updateFormField}
            addTask={this.addTask}
          />
        </div>
      </React.Fragment>
    )
  }



}