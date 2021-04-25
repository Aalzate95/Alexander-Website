import './Carrousel.css'
import React,{useState} from 'react'
import {GrCaretNext,GrCaretPrevious  } from "react-icons/gr";



const Carrousel = ({data}) => {
    const [current,setCurrent] = useState(0)
    const [next,setNext] = useState(current+1)
    const [prev,setPrev] = useState(data.length-1)

    const totalElements = data.length-1;

    const handleClickNext =()=>{
        setNext(current)
        setCurrent(prev)
        if(prev===0){
            setPrev(totalElements)
        }
        else{setPrev(prev-1)}
    }
    const handleClickPrev= () =>{
        setPrev(current)
        setCurrent(next)
        if(next===totalElements){
            setNext(0)
        }
        else{setNext(next+1)}
    }

    return ( 
        <div className="carrousel">
            <div className="items" >
                <div className="item prev">
                    <img alt={data[prev].titulo} src={data[prev].imagen}/>
                </div>
                <div className="item active">
                    <div className="item-content">
                        <div className="item-content-card">
                            <p><u>{data[current].titulo}</u></p>
                            <p>{data[current].descripcion}</p>
                        </div>
                    </div>
                    <img alt={data[current].titulo} src={data[current].imagen}/>
                </div>
                <div className="item next">
                    <img alt={data[next].titulo} src={data[next].imagen}/>
                </div>
            </div>
            <div className="buttons">
                <div className="button" onClick={(e)=>{handleClickPrev(e)}}><i><GrCaretPrevious/></i></div>
                <div className="button" onClick={(e)=>{handleClickNext(e)}}><i ><GrCaretNext/></i></div>
            </div>
        </div>
     );
}
 
export default Carrousel;