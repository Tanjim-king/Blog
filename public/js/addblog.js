const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            thumb: "",  // This will store the Base64 image
            title: "",
            desc: "",
            name: "",
            type: ""
        };
    },
    methods: {
        // Convert uploaded image to Base64
        convertToBase64(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.thumb = reader.result; // Store Base64 data in thumb
                };
            }
        },
        addBlog() {
            let d = new Date();
            let info = {
                author: this.name,
                title: this.title,
                desc: this.desc,
                img: this.thumb, // Send Base64 image
                date: d.toLocaleDateString('bn-BD', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }),
                type: this.type
            };

            if (this.thumb && this.title && this.desc && this.name && this.type) {
                axios.post("http://localhost:5050/blogs", info)
                    .then(res => {
                        alert("Your blog has been successfully added!");
                        window.open("/", "_self");
                    })
                    .catch(err => {
                        alert("Error adding blog. Please try again.");
                        console.error(err);
                    });
            } else {
                alert("Inputs cannot be empty");
            }
        }
    }
});

app.mount("#app");
