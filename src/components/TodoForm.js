import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.item)
        this.setState({
            item: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                      type="text"
                      name="task"
                      value={this.state.item}
                      onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;