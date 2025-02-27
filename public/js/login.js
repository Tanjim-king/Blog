
const {createApp} = Vue ;

const app = createApp({
    data(){
        return{
            email : "",
            password : "",
            error  : false
        }
    },
    methods:{
       async login(){
            let users = await this.getUsersData();
            users.map(user =>{
                if (this.email === user.email && this.password === user.password) {
                    axios.post("/setUser" , {userId : user.id})
                    window.open("/" , "_self")
                }
            })
            this.error  =  !this.error
        },
       async getUsersData(){
        let data = []
        await axios.get("/api/users")
            .then(res =>{
                
                data = res.data;
            })
         
        return data;
       }
    }
})

app.mount("#app")