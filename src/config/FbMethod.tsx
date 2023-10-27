import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import{getDatabase,onValue,ref, set,push} from "firebase/database"
import { app } from './FBConsig'


let auth = getAuth(app)
let db = getDatabase(app)
export function fbSignup(body:any){
return new Promise((resolve, reject) => {
    if (!body.Email || !body.password){
        reject(alert("correct Your Email&Password"))
    }else{
        createUserWithEmailAndPassword(auth,body.Email,body.password).then((res)=>{
            let id = res.user.uid
            body.id = id
            const reference = ref(db,`Rigestration/${id}`)
            set(reference,body).then((res)=>{
                resolve("USER CREATE SUCCESFULLY")
            }).catch((err)=>{
                reject(err)
            })

        }).catch((err)=>{
            reject(err)
        })
        
    }
})
}

export function fbLogin(body:any){
    return new Promise((resolve, reject) => {
        if(!body.Email  || !body.password){
            reject("Email and Password is Required")
            reject()
        }else{
            signInWithEmailAndPassword(auth , body.Email, body.password).then((res)=>{
                let id = res.user.uid
                const reference = ref(db,`Rigestration/${id}`)
                onValue(reference,(data)=>{
                    if(data.exists()){
                        resolve(data.val())

                    }else{
                        reject("No Data Found")
                    }
                })
            }).catch((err)=>{
                reject(err)
            })
        }
    })
}

export default function Fbget(nodename:string,id?:any){
return new Promise((resolve, reject) => {
    const refference = ref(db,`${nodename}/${id?id:""}`)
    onValue(refference,(data)=>{
        if(data.exists()){
            resolve(Object.values(data.val()))
        }else{
            reject("no data found")
        }
    })
})
}