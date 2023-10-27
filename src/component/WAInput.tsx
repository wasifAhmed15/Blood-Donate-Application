import {TextField } from '@mui/material'
type propstype = {
    label:string
    variant:"outlined"|"filled"|"standard"
    onchange?:any
    fullWidth?:any
    className?:string
    type:string
    value:any
}
export default function WAinput(props:propstype){
    let {label,variant,onchange,fullWidth,className,type,value}=props
    return <>
    <TextField type={type} label={label} variant={variant} onChange={onchange} fullWidth={fullWidth} placeholder={label} id={label} className={className} value={value}/>
    </>
}