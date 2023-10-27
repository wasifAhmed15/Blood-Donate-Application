import WAinput from "../component/WAInput";
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react";
import WAButton from "../component/WAButton";
import { fbSignup } from "../config/FbMethod";
import { useNavigate } from "react-router-dom";
export default function SignupData(){
    let [model,setmodel]=useState<any>({})

let navigat = useNavigate()

    const fillmodel = (key:string,val:any)=>{
model[key]=val
setmodel({...model})
}


let Rigester =()=>{
    console.log(model)
    fbSignup(model).then((res)=>{
        navigat("/")
    }).catch((err)=>{
        console.log(err)
    })
    
}






    return <>
    <div className="container  h-screen flex justify-center  items-center">
        <div className="w-50  border">
            <div className="p-3 ">
            <WAinput label="Name" variant="outlined" type="text"  onchange={(e:any)=>fillmodel("Name",e.target.value)} value={model.Name}/>
            <WAinput label="Last Name" variant="outlined" className="px-2" type="text"  onchange={(e:any)=>fillmodel("LastName",e.target.value)} value={model.LastName}/>
            </div>
            <div className="p-3">
            <WAinput label="Email" variant="outlined" fullWidth type="email" onchange={(e:any)=>fillmodel("Email",e.target.value)} value={model.Email}/>
            </div>

            <div className="p-3">
            <WAinput label="password" variant="outlined" fullWidth type="password" onchange={(e:any)=>fillmodel("password",e.target.value)} value={model.password}/>
            </div>

            <div className="p-3">
            <WAinput label="NIC NO" variant="outlined" fullWidth type="number" onchange={(e:any)=>fillmodel("Nic",e.target.value)} value={model.Nic}/>
            </div>

            <div className="p-3 ">
            <WAinput label="Phone No" variant="outlined" fullWidth type="number" onchange={(e:any)=>fillmodel("Phone",e.target.value)} value={model.Phone}/>
            </div>

            <div className="p-3 ">
            <WAinput label="Age" variant="outlined" fullWidth type="number" onchange={(e:any)=>fillmodel("Age",e.target.value)} value={model.Age}/>
            </div>

            <div className="p-3 ">
            <Form.Select aria-label="Select Your Blood Group" onChange={(e:any)=>fillmodel("BloodGroup",e.target.value)} value={model.BloodGroup}>
      <option>Select Your Blood Group</option>
      <option value="A">A</option>
      <option value="AB">AB</option>
      <option value="B">B</option>
      <option value="O">O</option>
    </Form.Select>
            </div>

            <div className="p-3 ">
            <Form.Select aria-label="Acceptor & Donor" onChange={(e:any)=>fillmodel("AcceptorandDonor",e.target.value)} value={model.AcceptorandDonor}>
      <option>Acceptor & Donor</option>
      <option value="Donat">Donat</option>
      <option value="Acceptor">Acceptor</option>
    
    </Form.Select>
            </div>
            <WAButton Varient="contained" color="info" Text="Signup" onClick={Rigester}/>


        </div>
    </div>
    
    </>
}