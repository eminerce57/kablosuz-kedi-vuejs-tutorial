const app = Vue.createApp({
    data(){
        return{
title :"my tags from vue",
content:"lorem ipsum dolor sit from vue",
array:[1,2,3,4],
personal:{
    name:"emin",
    lname:"erce"
},
details:`<a target="_blank" href="https://eminerce.com">eminerce.com</a>`,
url:"https://eminerce.com",
divCordinat:"",
inputValue:""

        };
    },
methods: {
    updateTitle(text) {
        this.title= text || "change form js";
    },
    updatecordinate(e){
        console.log(e.offsetX,"  ",e.offsetY)
        this.divCordinat =`${e.offsetX}  ${e.offsetY}`
        this.updateTitle(this.divCordinat)
    },
    updateValue(e){
  
        this.inputValue = e.target.value

    }
},
    
    }).mount("body")

