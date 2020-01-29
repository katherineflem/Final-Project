import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Dashboard from '../client/pages/Dashboard'

class App extends React.Component<IAppProps, IAppState> {


    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Dashboard}></Route>
                    </Switch>
                </BrowserRouter>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
}

export default App;