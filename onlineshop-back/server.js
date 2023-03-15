//require express to run server and routes

const express=require('express');
const app=express();
const cors = require('cors');
const bodyParser=require('body-parser');
// Cors for cross origin allowance
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'));

// Setup empty JS object to act as endpoint for all routes
projectData=
       [
        {
        id:1,
        label:'JVD2012',
        name:'acme10',
        price:'100 $',
        size:'700 MB'
    },
    {
        id:2,
        label:'JVD2078',
        name:'acme10',
        price:'700 $',
        size:'700 MB'
    },{
        id:3,
        label:'JVD2432',
        name:'acme10',
        price:'900 $',
        size:'700 MB'
    },
     {
        id:4,
        label:'JVD2012',
        name:'acme10',
        price:'100 $',
        size:'700 MB'
    },
    {
        id:5,
        label:'JVD2078',
        name:'acme10',
        price:'700 $',
        size:'700 MB'
    },{
        id:6,
        label:'JVD2432',
        name:'acme10',
        price:'900 $',
        size:'700 MB'
    },
     {
        id:7,
        label:'JVD2012',
        name:'acme10',
        price:'100 $',
        size:'700 MB'
    },
    {
        id:8,
        label:'JVD2078',
        name:'acme10',
        price:'700 $',
        size:'700 MB'
    },{
        id:9,
        label:'JVD2432',
        name:'acme10',
        price:'900 $',
        size:'700 MB'
    },
     {
        id:10,
        label:'JVD2012',
        name:'acme10',
        price:'100 $',
        size:'700 MB'
    },
    {
        id:11,
        label:'JVD2078',
        name:'acme10',
        price:'700 $',
        size:'700 MB'
    },{
        id:12,
        label:'JVD2432',
        name:'acme10',
        price:'900 $',
        size:'700 MB'
    },
]
    




app.get('/api',(req,res)=>{
   
   
    res.status(200).json(
        
        projectData
        
    );
})


app.post('/all',(req,res)=>{
    
    projectData.push(req.body);
    
    res.send(projectData);
   
      

})



const PORT=5000;
app.listen(PORT,()=>{
    
});