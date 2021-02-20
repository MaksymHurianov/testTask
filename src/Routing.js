import React, {useState} from 'react'
import {Route, Switch, Redirect} from "react-router-dom";
import {GradientsList} from "./GradientsList";
import {NewGradient} from "./NewGradient";
import {EditGradient} from "./EditGradient";

export function Routing() {

    const [colorValues, setColorValues] = useState([{
        colorFirstValue:'',
        colorSecondValue:''
    }])

    return (
        <>
            <Switch>
                <Route path="/" exact
                       render={() => <GradientsList colorValues={colorValues} setColorValues={setColorValues}/>}/>
                <Route path="/new" exact render={() => <NewGradient setColorValues={setColorValues}/>}/>
                <Route path="/edit/:id" exact
                       render={() => <EditGradient colorValues={colorValues} setColorValues={setColorValues}/>}/>
                <Route path={'/404'}
                        render={() => <h1>404: PAGE NOT FOUND</h1>}  />
                <Redirect from={ '*' } to={'/404'}/>
            </Switch>
        </>
    )
}