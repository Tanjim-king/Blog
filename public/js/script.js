const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            blogs : [],
            type : 'all'
        }
    },

    methods:{
        clickBlog(blogId){
           window.open(`/blog/${blogId}`)
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
       await axios.get("http://localhost:5050/blogs")
        .then(res=>{
            this.blogs = res.data
        })
    }
})

app.mount("#app")
