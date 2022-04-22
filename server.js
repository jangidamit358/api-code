const app=require("./src/index")
const connect=require("./src/configs/db")

app.listen(process.env.PORT || 2000,async function(){
    try{
        await connect();
        console.log("listening on port 2000")
    }catch(err){
        console.log("error in server",err)
    }
})
