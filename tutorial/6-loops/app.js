const app = Vue.createApp({
    data(){
        return{
            memberList:[
                "ibo",
                "ahmet",
                "mustafa"
            ],
            memberList2:[
                {"id":1,"name":'ahmet'},
                {"id":2,"name":'memed'},
                {"id":3,"name":'semi'},
                {"id":4,"name":'eyup'},
                {"id":5,"name":'yusuf'},
                {"id":6,"name":'meli'},
                {"id":7,"name":'efe'},

            ]
        };
    },
    
    })

app.mount("body")