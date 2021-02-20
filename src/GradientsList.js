import React from 'react'
import {Gradient} from "./gradient/Gradient";

export function GradientsList({colorValues, setColorValues}) {

    return (
        <div>
            {colorValues.map((colorValue, index) => {
                if(colorValue.colorFirstValue ==''&& colorValue.colorSecondValue == ''){
                    return
                }else{
                    return <Gradient key={index} style={{
                        width: '250px',
                        height: '50px',
                        background: `linear-gradient(to right, ${colorValue.colorFirstValue}, ${colorValue.colorSecondValue})`
                    }} colorValue={colorValue} index={index} setColorValues={setColorValues} colorValues={colorValues}/>
                }

            })}

        </div>
    )
}