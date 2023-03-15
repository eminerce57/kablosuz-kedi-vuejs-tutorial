const app = Vue.createApp({
    data(){
        return{
            myRedClass:"text-center text-danger",
            number:0,
        };
    },
    
    
created(){

setInterval(()=>{
this.number++
},200)

},
methods: {
},
computed:{
    boxClass(){

        return{
            "text-danger": this.number > 5,
            "text-success": this.number == 0,
            "text-secondary": this.number ==1,
            "text-dark": this.number == 2,
            "text-info": this.number ==4,
        
        }
        

    },
  
},
watch:{
  number(newValue,oldValue){
    console.log(newValue)
    if(newValue >= 5){
        this.number=0
    }
    else{

        
    }
  }
}



    })

app.mount("body")