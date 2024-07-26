const app = Vue.createApp({
    data() {
        return {
            outputOfKeyDown: "OUTPUT",
            outputOfEnter: "OUTPUT",
        }
    },
    methods: {
        showAlert() {
            alert("Alert!");
        },
        inputWord(event) {
            this.outputOfKeyDown = event.target.value;
        },
        enter(event) {
            this.outputOfEnter = event.target.value;
        }
    }
})

app.mount('#assignment')