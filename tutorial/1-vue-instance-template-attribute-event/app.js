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
details:`<a target="_blank" href="https://eminerce.com">eminerce.com</a>`
        };
    }

    
    }).mount("body")