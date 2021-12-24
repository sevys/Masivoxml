import React from 'react'
import {BrowserRouter,Route, Switch} from "react-router-dom";
import home from "../page/home";
import Basic from "../page/Basic";
import Premium from "../page/Premium";
import Videotutorial from "./Videotutorial";
import Termino from '../page/Terminos';

class App extends React.Component{
    render() {
        return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route exact path='/Basic' component={Basic}/>
                    <Route exact path='/Premium' component={Premium}/>
                    <Route exact path='/Videotutoriales' component={Videotutorial}/>
                    <Route exact path='/Terminos' component={Termino}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default App;
