import React, { useEffect, useState } from "react";
import './Billboard.css'
import Airport_next from "../Airport_next/Airport_next";
import Copy from "../Airport_prev/Airport_prev";
import { faPlane, faGlobeAmericas, faSignOutAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface jsonType {
    id: number,
    flight: string,
    gate: string,
    destination: string,
    time: string,
    bool: boolean
}


function Billboard() {

    const [jsonDB, setJsoanDB] = useState<jsonType[]>([])
    let [number, setNumber] = useState<number>(1)
    let [bool, setBool] = useState<boolean>(false)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/californiaLuv/Airport_DB/${String(number)}`)
        .then((res) => res.json())
        .then((json) => setJsoanDB(json))

        setTimeout(() => {
            if(number === 3) {
                setBool(!bool)
                setNumber(1)
                //console.log("+1 작동")
            } else {
                setBool(!bool)
                setNumber(++number) 
                //console.log("-1 작동")
            }
            
        }, 5000)
        
    }, [number])

    
    
    console.log(jsonDB)

    return(
        <section className="Billboard_container">
            <nav className="Billboard_nav">
                <div className="Billboard_box-20">
                    <h1>Flight</h1>
                    <div className="Billboard_icon-box">
                        <FontAwesomeIcon icon={faPlane} className={`Billboard_icon`}/>
                    </div>
                </div>
                <div className="Billboard_box-50">
                    <h1>Destination</h1>
                    <div className="Billboard_icon-box">
                        <FontAwesomeIcon icon={faGlobeAmericas} className={`Billboard_icon`}/>
                    </div>
                </div>
                <div className="Billboard_box-10">
                    <h1>Gate</h1>
                    <div className="Billboard_icon-box">
                        <FontAwesomeIcon icon={faSignOutAlt} className={`Billboard_icon`}/>
                    </div>
                </div>
                <div className="Billboard_box-20">
                    <h1>Time</h1>
                    <div className="Billboard_icon-box">
                        <FontAwesomeIcon icon={faClock} className={`Billboard_icon`}/>
                    </div>
                </div>
            </nav>
            { jsonDB.map((el:jsonType) => {
                return (
                    bool ? <Copy key={el.id} data={el} bool={bool}/> :
                    <Airport_next key={el.id} data={el} bool={bool}/>
                )
            })}
            
        </section>
    )
}

export default Billboard