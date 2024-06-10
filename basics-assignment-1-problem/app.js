const app = Vue.createApp({
    data() {
        return {
            myName: 'jeremy',
            age: 30,
            myLink: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcR5ULXi2OR1z-cpaVdnMbSm-VNbc5sHy5EOJzD6CD8QO42w_MHQN4eGeT4E2zHEmxkI&psig=AOvVaw1R0dtz31Nw5gLiZEmBNGEV&ust=1718120076622000&source=images&cd=vfe&opi=89978449&ved=0CAoQjRxqFwoTCKiDs5iu0YYDFQAAAAAdAAAAABAE',
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        },
    }
});

app.mount('#assignment');