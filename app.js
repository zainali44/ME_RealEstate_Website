const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/investor",cors(),(req,res)=>{
    //send data to frontend
    const data={
        email:" ",
        password:" "
    }

    collection.find()
    .then(result=>{
        res.json(result)
    }
    )
    .catch(err=>{
        console.log(err);
    }
    )
})


app.post("/investor",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email,password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(5000,()=>{
    console.log("port connected");
})

