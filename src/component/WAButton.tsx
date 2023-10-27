import { Button } from "@mui/material"

type propstype ={
    Text : string
    Varient:"text"|"contained"|"outlined"
    color:"secondary"|"success"|"error"|"info"
    className?:"string"
    onClick?:any

}
export default function WAButton (Props:propstype){
    let {Varient,Text,color,className,onClick}=Props
    return <>
   <Button variant={Varient} color={color} className={className} onClick={onClick}>{Text}</Button>
    </>
}