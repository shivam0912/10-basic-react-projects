import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaultaValue){

    const [value,setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultaValue))
        }catch(e){
            console.log(e);
            currentValue = defaultaValue
        }
        return currentValue;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
   return [value,setValue]
}