import React, {useEffect, useState} from 'react'
import {Redirect, useParams} from "react-router";
import {GradientField} from "./gradient/GradientField";
import './App.css';

export function EditGradient({colorValues, setColorValues}) {

    let {id} = useParams();

    const matchedColorValue = colorValues.find(value=>value.id === Number(id)) || {colorFirstValue:'',colorSecondValue:"", id:''}
    // const [inputFirstValue, setInputFirstValue] = useState(colorValues[id].colorFirstValue)
    // const [inputSecondValue, setInputSecondValue] = useState(colorValues[id].colorSecondValue)
    const [inputFirstValue, setInputFirstValue] = useState(matchedColorValue.colorFirstValue)
    const [inputSecondValue, setInputSecondValue] = useState(matchedColorValue.colorSecondValue)
    const [isAdded, setIsAdded] = useState(false)
    const [isFirstInput, setIsFirstInput] = useState(false)
    const [isSecondInput, setIsSecondInput] = useState(false)
    const editGradientStyle = {
        width: '300px',
        height: '50px',
        background: `linear-gradient(to right, ${inputFirstValue}, ${inputSecondValue})`
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
        if(e.currentTarget.value.length <= 7){
            setInputFirstValue(e.currentTarget.value)
        }
        setIsFirstInput(false)
    }

    function changeSecondValue(e) {
        if(e.currentTarget.value.length <= 7){
            setInputSecondValue(e.currentTarget.value)
        }
        setIsSecondInput(false)
    }

    function addUpdatedGradientField() {

        const updatedColorValues = []
        colorValues.forEach(function (item, i) {
            if (i === Number(id)) {
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
    if(!matchedColorValue.colorFirstValue && !matchedColorValue.colorFirstValue && !matchedColorValue.id){
        return <Redirect to={'/'}/>
    }


    return (
        <>
            <div className={'title'}>Edit item</div>
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