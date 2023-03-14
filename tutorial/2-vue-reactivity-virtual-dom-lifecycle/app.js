const app = Vue.createApp({
    data(){
        return{
number :0,
number2 :0,

        };
    },
methods: {
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

beforeCreate() {
    console.log("before create")
},
created() {
    console.log("create")
},
beforeMount() {
    console.log("before mount")
},

mounted() {
    console.log("mounted")
},
beforeUpdate() {
    console.log("before update")
},
updated() {
    console.log("updated")
},
beforeUnmount() {
    console.log(" before un mount")
},
unmounted() {
    console.log(" un mounted")
},   

    })

app.mount("body")