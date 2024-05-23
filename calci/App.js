// const express=require('express');
// const bodyParser=require('body-parser');
// const app=express();
// app.use(bodyParser.urlencoded({extended:true}));
// app.get('/',(req,res)=>{
//        res.sendFile(__dirname+"/index.html");
// });
// app.post('/',(req,res)=>{
//        const num1=parseInt(req.body.num1);
//        const num2=parseInt(req.body.num2);
//        const operation=req.body.operation;
//        let result;
//        switch(operation){
//               case '+':
//                      result=num1+num2;
//                      break ;
//               case '-':
//                      result=num1-num2;
//                      break ;
//               case '*':
//                      result=num1*num2;
//                      break ;
//               case '/':
//                      result=num1/num2;
//                      break ;  
//               default:
//                      result="invalid"; 
//                }
//        res.send("the result is "+result);

// });
// app.listen(3000,()=>{
//        console.log("server started at 3000");
// });
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
       res.sendFile(__dirname+"/index.html");
});
app.post('/',(req,res)=>{
       const num1=parseInt(req.body.num1);
       const num2=parseInt(req.body.num2);
       const operation=req.body.operation;
       let result;
       switch (operation){
              case "+":
                     result=num1+num2;
                     break;
              case "-":
                     result=num1-num2;
                     break;     
              case "*":
                     result=num1*num2;
                     break;     
               case "/":
                     result=num1/num2;
                     break;      
              default:
                     result="invalid";
       }
       res.send("The result is"+result);

});
app.listen(3000,()=>{
       console.log("server listening");
})