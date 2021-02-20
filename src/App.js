import './App.css';
import React from 'react'
import {Routing} from "./Routing";
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Routing/>
        </div>
    );
}

const ContainerApp = () => {
    return <HashRouter>
    {/*<BrowserRouter>*/}
        <App/>
    {/*</BrowserRouter>*/}
        </HashRouter>
}
export default ContainerApp
//export default App;
