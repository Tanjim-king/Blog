

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            blogs : []
        }
    },

    methods:{
        clickBlog(blogId){
           window.open(`/blog/${blogId}`)
        }
    },
   
   async mounted(){
       await axios.get("http://localhost:5050/blogs")
        .then(res=>{
            this.blogs = res.data
        })
    }
})

app.mount("#app")
