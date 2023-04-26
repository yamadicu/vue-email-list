const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [

            ]
        }
    },
    created(){
        for(let i=0; i<10;i++){
            this.call()
        }
    },
    methods: {
        call(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                console.log(response.data.response)
                this.mail.push(response.data.response)
            })
        }
    }
}).mount('#app')