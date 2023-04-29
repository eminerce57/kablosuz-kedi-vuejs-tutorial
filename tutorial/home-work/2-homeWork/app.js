const app = Vue.createApp({
    data(){
        return{
            value:""
        };
    },
    methods: {
        showalert(){
            alert("hi")
        }
    },
    })

app.mount("body")