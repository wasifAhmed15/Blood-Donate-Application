import Fbget from "../config/FbMethod"
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserList(){
    let params = useParams()
    let [user,setuser]=useState<any>([])
    let [userLogin,setLogin]=useState<any>([])
    let UserData = ()=>{
Fbget(`Rigestration`).then((res:any)=>{
    console.log(res)
    setuser([...res])
}).catch((err)=>{
    console.log(err)
})


    }


    let LoginData = ()=>{
        Fbget(`Rigestration/${params.id}`).then((res:any)=>{
            console.log(res)
            setLogin([...res])
        }).catch((err)=>{
            console.log(err)
        })
        
        
            }


    useEffect(()=>{
        UserData()
        LoginData()
    },[])
   


    return <>
    
   <div className="row">

   {
    user.map((x:any,i:any)=>{
console.log(x)
if(x.AcceptorandDonor !==userLogin[0]){
    if(x.BloodGroup == userLogin[2]){
return <div className="col-4 border mx-3">
          <p>Name:{x.Name}</p>
          <p>BloodGroup:{x.BloodGroup}</p>
          <p>Email:{x.Email}</p>
          <p>Catgery:{x.AcceptorandDonor}</p>
</div>
    }
}
    })
   }
   </div>
    </>
}