import React from 'react'
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <ul className={'header'}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/new'}>Create</NavLink></li>
        </ul>
    )
}