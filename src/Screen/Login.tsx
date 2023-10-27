import WAinput from "../component/WAInput";
import { fbLogin } from "../config/FbMethod";
import { useState,useEffect } from "react";
import WAButton from "../component/WAButton";
import { useNavigate } from "react-router-dom";
export default function LoginData(){
    let [model,setmodel]=useState<any>({})
    let navigat=useNavigate()
    const fillmodel =(key:string,val:any)=>{
model[key]=val
setmodel({...model})


}
let Login =()=>{
    console.log(model)
fbLogin(model).then((res:any)=>{
    navigat(`/Main/user/${res.id}`)

}).catch((err)=>{
    console.log(err)
})
    
    
}
    return <>
    <div className="container  h-screen flex justify-center  items-center">
        <div className="w-50  border text-center">
        
            <div className="p-3">
            <WAinput label="Email" variant="outlined"  type="email" onchange={(e:any)=>fillmodel("Email",e.target.value)} value={model.Email}/>
            </div>

            <div className="p-3">
            <WAinput label="password" variant="outlined"  type="password" onchange={(e:any)=>fillmodel("password",e.target.value)} value={model.password}/>
            </div>

         

       
            <WAButton Varient="contained" color="info" Text="Signup" onClick={Login}/>
            <div className="">
                    <WAButton Varient="text" color="info" Text="SignUp" onClick={()=>navigat("/Signup")}/>
                </div>

        </div>
    </div>
    
    </>
}