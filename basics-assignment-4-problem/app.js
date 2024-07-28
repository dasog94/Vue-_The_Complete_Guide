const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            visible: true,
            backgroundColor: "",
        }
    },
    computed: {
        userInputStyle() {
            if (this.userInput === 'user1') {
                return 'user1';
            } else if (this.userInput === 'user2') {
                return 'user2';
            }
            return '';
        },
        paragraphVisibility() {
            if (this.visible) {
                return 'visible';
            } else {
                return 'hidden';
            }
        },
    },
    methods: {
        toggleVisibility() {
            this.visible = !this.visible;
        },
    }
});

app.mount('#assignment');