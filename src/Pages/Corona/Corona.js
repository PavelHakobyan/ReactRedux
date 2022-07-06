import React, { useEffect, useState } from "react";
import './Corona.css'


const Corona = () => {
    const [name, setName] = useState("");
    const [count, setCount] = useState({name:"",confirmed:"",deaths:"",dt:"",conf:""})
    const hendlSend = async() => {
        try {
            const response= await fetch(
                `https://corona-api.com/countries/${name}`
            )

            const data = await response.json();
            if (data.data.length===0) {
                throw new Error('error')
            }
            else {
                console.log(data);
                const name = data.data.name
                setCount((x)=>{
                    return {...x,name:name}
                })
            }
            const confirmed = data.data.latest_data.confirmed
            setCount((a)=>{
                return{...a,confirmed:confirmed}
            })
            const deaths = data.data.latest_data.deaths
            setCount((f)=>{
                return{...f,deaths:deaths}
            })
            const dt = data.data.today.deaths
            setCount((n)=>{
                return{...n,dt:dt}
            })
            const conf = data.data.today.confirmed
            setCount((m)=>{
                return{...m,conf:conf}
            })
        }
        catch(error){
            console.log(error);
        }
    }
    const hendleChange = (e) => {
        const {value} = e.target;
        setName(value)
    }
    return (
        <div className="return">
            <input id="inp" onChange={hendleChange}/>
            <button className="but" onClick={hendlSend}>Click</button>
            {count.name !== "" && <div className="name"><p>Erkir {count.name}</p></div>}
            {count.conf !== "" && <div className="conf">Orva varakvacner {count.conf}</div>}
            {count.dt !== "" && <div className="dt">Orva mahacacner {count.dt}</div>}
            {count.confirmed !== "" && <div className="conf">Yndhanur varakvacner {count.confirmed}</div>}
            {count.deaths !== "" && <div className="dt">Yndhanur mahacacner {count.deaths}</div>}
        </div>
    )
}

export default Corona;