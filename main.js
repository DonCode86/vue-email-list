const app = new Vue({
    el: "#root",
    data: {
        emails: [],
    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((obj) => {
                    this.emails.push(obj.data.response)
                    console.log(obj.data.response)
                })
        }
    }
})