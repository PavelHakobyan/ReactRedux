import './HomePage.css'
import React, {useState} from "react"


export default function HomePage(){
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)

    return <div>
        <div className="masin">
            <div className="as">
                <div className="tigranmec" onClick={()=>setCount((e) => !e)}></div>
                {count && <div className="real"><a className="a1" href="https://hy.wikipedia.org/wiki/Տիգրան_Մեծ">Tigran Mec</a></div>}
            </div>

            <div className="as">
                <div className="paptagavor" onClick={()=>setNkar((e) => !e)}></div>
                {nkar && <div className="real"><a className="a1" href="https://hy.wikipedia.org/wiki/Գլխավոր_էջ">Pap Tagavor</a></div>}
            </div>

            <div className="as">
                <div className="vardanmamikonyan" onClick={()=>setReal((e) => !e)}></div>
                {real && <div className="real"><a className="a1" href="https://hy.wikipedia.org/wiki/Գլխավոր_էջ"> Vardan Mamikonyan</a></div>}
            </div>
            
        </div>
    </div>
}