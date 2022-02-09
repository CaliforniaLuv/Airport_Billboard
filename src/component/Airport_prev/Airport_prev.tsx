import React, { useEffect, useState } from "react";

interface Iprops {
    data: {
        id: number,
        flight: string,
        gate: string,
        destination: string,
        time: string,
        bool: boolean
    }
    bool: boolean
}



function Airport_prev(props:Iprops) {

    const {flight, gate, destination, time} = props.data

    const [word, setWord] = useState<string[]>([])
    const [ani, setAny] = useState<string>("Airport_word_Ani")
    

     //console.log("너 몇번 작동되냐..", props.bool)

    useEffect(() => {
        setWord([])
    }, [props.data.destination])

    for(let i = 0; i < 15; i++) {
        word.push(destination[i])
    }
    
    
    return(
        <div className="Airport_container">
            <ul className="Airport_box-22">
                <li className={`Airport_word ${ani}`}>
                    {flight[0]}   
                </li>
                <li className={`Airport_word ${ani}`}>
                    {flight[1]}   
                </li>
                <li className={`Airport_word ${ani}`}>
                    {flight[2]}     
                </li>
                <li className={`Airport_word ${ani}`}>
                    {flight[3]}
                </li>
                <li className={`Airport_word ${ani}`}>
                    {flight[4]}
                </li>
            </ul>

            <ul className="Airport_box-45">
                {word.map((el,idx) => {
                    return <li key={idx} className={`Airport_word ${ani}`}>{el}</li>
                })}
            </ul>

            <ul className="Airport_box-10">
                <li className={`Airport_word ${ani}`}>
                    {gate[0]}
                </li>
                <li className={`Airport_word ${ani}`}>
                    {gate[1]}
                </li>
            </ul>
 
            <ul className="Airport_box-22">
                <li className={`Airport_word ${ani}`}>
                    {time[0]}    
                </li>
                <li className={`Airport_word ${ani}`}>
                    {time[1]}
                </li>
                <li className={`Airport_word ${ani}`}>
                    :       
                </li>
                <li className={`Airport_word ${ani}`}>
                    {time[3]} 
                </li>
                <li className={`Airport_word ${ani}`}>
                    {time[4]} 
                </li>
            </ul>
        </div>
    )
}

export default Airport_prev