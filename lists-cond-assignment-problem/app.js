const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            tasks: [],
            tasksIsVisible: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.tasksIsVisible ? 'Hide List' : 'Show List';
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
            this.taskInput = '';
        },
        toggleTasksVisibility() {
            this.tasksIsVisible = !this.tasksIsVisible;
        },
    }


});

app.mount("#assignment");