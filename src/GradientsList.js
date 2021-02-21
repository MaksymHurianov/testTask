import React from 'react'
import {Gradient} from "./gradient/Gradient";

export function GradientsList({colorValues, setColorValues}) {

    return (
        <div>
            <div className={'title'}>Items list</div>
            {colorValues.map((colorValue) => {
                if(!colorValue.colorFirstValue && !colorValue.colorSecondValue){
                    return
                }else{
                    return <Gradient key={colorValue.id} style={{
                        width: '250px',
                        height: '50px',
                        background: `linear-gradient(to right, ${colorValue.colorFirstValue}, ${colorValue.colorSecondValue})`
                    }} colorValue={colorValue} index={colorValue.id} setColorValues={setColorValues} colorValues={colorValues}/>
                }

            })}

        </div>
    )
}