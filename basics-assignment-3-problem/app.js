const app = Vue.createApp({
    data() {
        return {
            num: 0,
        }
    },
    computed: {
        result() {
            if (this.num < 37) {
                return 'Not there yet';
            } else if (this.num > 37) {
                return 'Not there';
            }
            return this.num;
        },
    },
    watch: {
        result() {
            const that = this
            setTimeout(function () {
                that.num = 0;
            }, 5000)
        }
    },
    methods: {
        add(number) {
            this.num += number;
        }
    }
})

app.mount('#assignment')