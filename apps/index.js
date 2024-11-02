const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcrypt');

const app = express();

const User = require('./models/user')

app.use(morgan('dev'))
app.set("view engine",'ejs')
app.use(express.json())   // post method se aaye req.body ko read krne ke liye
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
const dbConnect = require('./config/db')

// app.use((req,res,next)=>{
//     console.log("this is middleware");
//     return next();
// })

// app.get('/',(req,res)=>{
//     res.send("hola");
// })

// app.get('/about',(req,res)=>{
//     res.render('./site/index.html')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/site/index.html'); // Serve static HTML
});

app.get('/profile', (req,res)=>{
})

app.get('/register',(req,res)=>{
    res.render('register')  //views
})
app.post('/register', async (req, res)=>{  
    console.log(req.body)

    const {email, password} = req.body

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    await User.create({
     email:email, password:hashedPassword
    })

    res.render('after_register')
    
})

app.get('/users-list', async (req,res)=>{
    const users = await User.find()
    res.send(users)
}
)


app.get('/user-one', (req,res)=>{
    User.findOne({username:'fgg'}).then((user)=>
    console.log(user)) 
})


app.post('/get-form-data', (req, res)=>{  // data securely laane ke liye
    console.log(req.body)
    // res.send('data received')
    res.render('about')
})

app.listen(8000, ()=>console.log("jAT"))


