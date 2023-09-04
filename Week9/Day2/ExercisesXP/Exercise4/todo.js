class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    listTasks() {
        return this.tasks.map((task, index) => {
            const status = task.completed ? 'Completed' : 'Incomplete';
            return `${index + 1}. ${task.task} - ${status}`;
        });
    }
}

export default TodoList;