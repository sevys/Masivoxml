import React from 'react'
import {BrowserRouter,Route, Switch} from "react-router-dom";
import home from "../page/home";
import Basic from "../page/Basic";
import Premium from "../page/Premium";
class App extends React.Component{
    render() {
        return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route exact path='/Basic' component={Basic}/>
                    <Route exact path='/Premium' component={Premium}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default App;
