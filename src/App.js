import React from 'react';
import ReactDom from 'react-dom';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./Styles.css";


const tasks = [
  {
    task: "Organize Garage",
    id: 101,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 102,
    completed: false  
  },
  {
    task: "Shop groceries",
    id: 103,
    completed: false
  }
  
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your 
  
  constructor() {
    super();
    this.state = {
      tasks,
      task: ""
    }
  }

  toggleCompleted = clickedItemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
    task: taskName,
    id: new Date(),
    compleated: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => 
        !item.completed
      )
    })
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
          <TodoList
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
