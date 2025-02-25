
const {createApp} = Vue ;

const app = createApp({
    data(){
        return{
            name : "",
            email : "",
            password : ""
        }
    },
    methods:{
        signup(){
            let data = {
                name : this.name,
                email : this.email,
                password : this.password
            }
            if (this.name && this.email && this.password) {
                console.log(`Name is ${this.name} . Email is ${this.email}  , password is ${this.password}`)
                axios.post("http://localhost:5050/users" , data)
                .then(res =>{
                    window.open("/login" , "_self")
                })
            } else {
                alert('Input filed can not be empty')
            }
        }
    }
})

app.mount("#app")