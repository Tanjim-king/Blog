const {createApp} = Vue ;

const app = createApp({
    data(){
        return{
            thumb:"",
            title : "",
            desc:"",
            name : ""
        }
    },
    methods:{
        addBlog(){
            let d = new Date()
            let info ={
                author : this.name,
                title : this.title,
                desc : this.desc,
                img : this.thumb,
                date : d.toLocaleDateString('bn-BD',{
                    day : 'numeric',
                    month:'long',
                    year : 'numeric',
                    hour : 'numeric',
                    minute : 'numeric'
                })
            }
            if (this.thumb && this.title && this.desc) {
                axios.post("http://localhost:5050/blogs" , info)
                    .then(res =>{
                        alert("Your blog is succesfull add")
                        window.open("/" ,"_self")
                    })
            } else {
                alert("Inputs can not be empty")
            }
        }
    }
})
app.mount("#app")