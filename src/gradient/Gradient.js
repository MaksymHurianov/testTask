import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import {GradientField} from "./GradientField";
import s from './gradient.module.css'

export function Gradient({style, colorValue, index, colorValues, setColorValues}) {
    const [isClick, setClick] = useState(false)

    if (isClick) {
        return <Redirect to={`/edit/${index}`}/>
    }

    function updateGradientField() {
        setClick((isClick) => !isClick)
    }

    function deleteGradientField() {
        console.log(index)
        const filteredColorValues = []
        colorValues.forEach(function (item, i) {

            if (i == index) {

            } else {
                filteredColorValues.push(item)
            }
            setColorValues(filteredColorValues)
            console.log(item)
            console.log(i)
        })
    }

    return (
        <div className={s.gradient}>
            <GradientField style={style} colorValue={colorValue}/>
            <div>
                <button className={s.buttonStyle} onClick={updateGradientField}>edit</button>
            </div>
            <div>
                <button className={s.buttonStyle} onClick={deleteGradientField}>delete</button>
            </div>
        </div>
    )
}