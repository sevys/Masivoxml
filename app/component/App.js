import React from 'react'
import {BrowserRouter,Route, Switch} from "react-router-dom";
import home from "../page/home";
class App extends React.Component{
    render() {
        return(

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}



export default App;