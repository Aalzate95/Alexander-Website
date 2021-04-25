import React,{useEffect} from 'react';
import './Darkhole.css'






const Darkhole = ({title}) => {

    const setChild=(delay=0.05,rotate=12,translate=4)=>{
        let delayAcumulator = 0
        let rotateAcumulator = 0
        let espiral = [...Array(61).keys()].map((circulo)=>{
            delayAcumulator = delayAcumulator+delay
            rotateAcumulator = rotateAcumulator+rotate
            return <div 
                        id = {circulo}key={circulo}
                        className="circle"
                        style={{transform:`rotate(${rotateAcumulator}deg) translateX(${translate}em)`,
                                animationDelay:`${delayAcumulator}s`}}
                    ></div>
        })
        return espiral
    }
    useEffect(() => {
        
      }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return ( 
        <div className="Darkhole">
            <div className="Singularidad">
                <span>{title}</span>
            </div>
            {setChild(0.7,12)}
            {setChild(0.5,6,6)}
        </div>
     );
}
 
export default Darkhole;