const app = Vue.createApp({
    data(){
        return{
number :0,
number2 :0,

        };
    },
methods: {
},
computed:{
    result(){
        console.log("working result 1")
       return this.number > 0
        ?"positive" 
        : this.number < 0 
        ? "negative"
        :"----"

    },
    result2(){
        console.log("working result 2")
        return this.number2 > 0
        ?"positive" 
        : this.number2 < 0 
        ? "negative"
        :"----"

    }
        
},
watch:{
    number(newValue,oldValue){
        console.log("working number",newValue,oldValue)

    }
}



    })

app.mount("body")