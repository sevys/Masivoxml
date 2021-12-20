import React from 'react'
import {BrowserRouter,HashRouter,Route, Switch} from "react-router-dom";
import home from "../page/home";
import Basic from "../page/Basic";
import Premium from "../page/Premium";
import Videotutorial from "./Videotutorial";
class App extends React.Component{
    render() {
        return(

            <HashRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route exact path='/Basic' component={Basic}/>
                    <Route exact path='/Premium' component={Premium}/>
                    <Route exact path='/Videotutoriales' component={Videotutorial}/>
                </Switch>
            </HashRouter>
        )
    }
}



export default App;
