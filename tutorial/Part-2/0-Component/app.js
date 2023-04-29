const app = Vue.createApp({
data(){
    return{
      
    };
}

})

app.component("counter-item",{
data(){
    return{
        Counter:0
    }    
},
template:` 
<div class="card" >
<button @click="Counter++">+</button>
<button @click="Counter--">-</button>
<br>{{Counter}}
</div>`

})
app.mount("body")