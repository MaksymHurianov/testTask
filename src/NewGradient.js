import React, {useEffect, useState} from 'react'
import {Redirect} from "react-router-dom";
import {GradientField} from "./gradient/GradientField";

export function NewGradient({setColorValues}) {
    const [colorFirstValue, setColorFirstValue] = useState('')
    const [colorSecondValue, setColorSecondValue] = useState('')
    const [isClick, setIsClick] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isFirstInput, setIsFirstInput] = useState(false)
    const [isSecondInput, setIsSecondInput] = useState(false)

    useEffect(() => validation()
        , [colorFirstValue, colorSecondValue])

    const validation = () => {
        const firstInput = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(colorFirstValue)
        const secondInput = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(colorSecondValue)
        if (firstInput && secondInput) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    function changeFirstColor(e) {
        setColorFirstValue(e.currentTarget.value)
        setIsFirstInput(false)
    }

    function changeSecondColor(e) {
        setColorSecondValue(e.currentTarget.value)
        setIsSecondInput(false)
    }

    function addGradientField() {
        setColorValues((colorValues) => {
            return [{colorFirstValue, colorSecondValue}, ...colorValues]
        })
        setIsClick((isClick) => {
            return !isClick
        })


    }

    if (isClick) {
        return <Redirect to={'/'}/>
    }
    const gradientStyle = {
        width: '300px',
        height: '50px',
        background: `linear-gradient(to right, ${colorFirstValue}, ${colorSecondValue}`
    }
    function blurFirstInput(){
        if(!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(colorFirstValue)){
            setIsFirstInput(true)
        }else{
            setIsFirstInput(false)
        }
    }
    function blurSecondInput(){
        if(!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(colorSecondValue)){
            setIsSecondInput(true)
        }else{
            setIsSecondInput(false)
        }
    }
    const inputStyle = {
        backgroundColor: '#d62342',
            color: '#662b0e',
    }

    return (
        <>
            <div className={'inputWrapper'}>
                <input onChange={changeFirstColor} value={colorFirstValue} style={isFirstInput?inputStyle:undefined} onBlur={blurFirstInput} className={'inputStyle'}/>
                <input onChange={changeSecondColor} value={colorSecondValue} style={isSecondInput?inputStyle:undefined} onBlur={blurSecondInput} className={'inputStyle'}/>
            </div>
            <button onClick={addGradientField} disabled={isDisabled} className={'addButton'}>add</button>
            <GradientField style={gradientStyle} colorValue={{colorFirstValue, colorSecondValue}}/>
        </>
    )
}