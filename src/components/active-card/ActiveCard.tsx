import React, { useState, useEffect } from 'react';
import Card from '../result/Card';
type TypeProps = {
    resultPromis:Record<string, string | number>;
    index: number;
    handleActiveCard: (activeCard: number) => void;
}
const f = false

function ActiveCard(props:TypeProps) {
    
    const [saveData, setSaveData] = useState<Record<string, string | number> | boolean>(f);
    const [activeBlock, setActiveBlock] = useState(f)
    useEffect(()=>{
        console.log('activeBlock check', activeBlock)
        console.log('saveData check', saveData)
        !saveData && setSaveData(props.resultPromis)
        !activeBlock && setActiveBlock(true)
        
        
    }, [props.index])
    const clickClose = () => {
        setActiveBlock(f)
        setSaveData(f)
        props.handleActiveCard(-1)
        console.log('CLICK CLOUSR ACTIVE CARD')
        
    }
    console.log('ActiveCard')
    return (
        <>
            <div className={`block-active-card ${activeBlock && 'active'}`}>
                {activeBlock && 
                <>
                    <div className="close-icon" onClick={clickClose}>
                        <div className="close-icon__line"></div>
                    </div>
                    <div className="active-card">
                        <Card data={saveData} index={props.index} />
                        <div className="active-card__description">
                            <div> 
                            {saveData!.ingredients.map(el => (
                                <span>{` ◾${el} `}</span>
                            ))}
                            </div>
                            <div>
                            {saveData!.instructions.map(el => (
                                <span>{` ◾${el} `}</span>
                            ))}
                            </div>
                            
                        </div>
                    </div>
                </>}
            </div>
        </>
    )
}
export default ActiveCard