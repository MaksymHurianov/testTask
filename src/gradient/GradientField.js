import React from 'react'
import s from './gradientField.module.css'

export function GradientField({style, colorValue}) {
    return (
        <div style={style} className={s.gradientField}>
            <div>{colorValue.colorFirstValue}</div>
            <div>{colorValue.colorSecondValue}</div>
        </div>
    )
}