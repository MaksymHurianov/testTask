import React, {useEffect, useState} from 'react'
import {Redirect, useParams} from "react-router";
import {GradientField} from "./gradient/GradientField";
import './App.css';

export function EditGradient({colorValues, setColorValues}) {

    let {id} = useParams();

    const [inputFirstValue, setInputFirstValue] = useState(colorValues[id].colorFirstValue)
    const [inputSecondValue, setInputSecondValue] = useState(colorValues[id].colorSecondValue)
    const [isAdded, setIsAdded] = useState(false)
    const [isFirstInput, setIsFirstInput] = useState(false)
    const [isSecondInput, setIsSecondInput] = useState(false)
    const editGradientStyle = {
        width: '300px',
        height: '50px',
        background: `linear-gradient(to right, ${inputFirstValue}, ${colorValues[id].colorSecondValue})`
    }
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => validation()
        , [inputFirstValue, inputSecondValue])



    function validation() {
        const firstInput = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputFirstValue)
        const secondInput = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputSecondValue)
        if (firstInput && secondInput) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    if (isAdded) {
        return <Redirect to={'/'}/>
    }

    function changeFirstValue(e) {
        setInputFirstValue(e.currentTarget.value)
        setIsFirstInput(false)
    }

    function changeSecondValue(e) {
        setInputSecondValue(e.currentTarget.value)
        setIsSecondInput(false)
    }

    function addUpdatedGradientField() {

        const updatedColorValues = []
        colorValues.forEach(function (item, i) {

            if (i == id) {
                updatedColorValues.push({colorFirstValue: inputFirstValue, colorSecondValue: inputSecondValue})
            } else {
                updatedColorValues.push(colorValues[i])
            }
        });
        setColorValues(updatedColorValues)
        setIsAdded(isAdded => !isAdded)
    }
    function blurFirstInput(){
        if(!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputFirstValue)){
            setIsFirstInput(true)
        }else{
            setIsFirstInput(false)
        }
    }
    function blurSecondInput(){
        if(!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputSecondValue)){
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
                <input onChange={changeFirstValue} value={inputFirstValue} style={isFirstInput?inputStyle:undefined} onBlur={blurFirstInput} className={'inputStyle'}/>
                <input onChange={changeSecondValue} value={inputSecondValue} style={isSecondInput?inputStyle:undefined} onBlur={blurSecondInput} className={'inputStyle'}/>
            </div>
            <button onClick={addUpdatedGradientField} disabled={isDisabled} className={'addButton'}>Add</button>
            <GradientField
                style={editGradientStyle}
                colorValue={{colorFirstValue: inputFirstValue, colorSecondValue: inputSecondValue}}

            />

        </>
    )
}