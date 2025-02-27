const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            blogs : [],
            type : 'all',
        
        }
    },

    methods:{
        clickBlog(blogId){
           window.open(`/blog/${blogId}` , "_self")
        },
        changeType(type){
            this.type = type

        }
    },
   computed:{
    filteredBlogs(){
        if (this.type === 'all') return this.blogs
        return this.blogs.filter(blog =>{
            if (blog.type === this.type) return blog

        })
    }
   },
   async mounted(){
       await axios.get("/api/blogs")
        .then(res=>{
            this.blogs = res.data
        })
        
    }
})

app.mount("#app")
