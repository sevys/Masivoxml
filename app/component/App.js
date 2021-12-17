import React from 'react'
import {BrowserRouter,Route, Switch} from "react-router-dom";
import home from "../page/home";
import Basic from "../page/Basic";
class App extends React.Component{
    render() {
        return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route exact path='/Basic' component={Basic}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default App;
