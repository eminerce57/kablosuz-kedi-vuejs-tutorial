const app = Vue.createApp({
    data(){
        return{
       name:"emin",
       surname:"erce",
       age:18,
       img:"https://media.licdn.com/dms/image/C5603AQFPxQIDT4gigQ/profile-displayphoto-shrink_800_800/0/1643630603446?e=2147483647&v=beta&t=h1SXEZ3UBrn1A-d--f849r7LhR9jODXbLmqFThFjU0Q"
       
        };
    },
    methods: {
        getrandom(){

            return Math.round(Math.random()) 
        }
    },
    })

app.mount("body")