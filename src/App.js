import React from 'react';

import { Router, Route } from 'react-router';

import {enhancedHistory} from './reducers/store';


const App = () => {

    return (
        <div>
            
            <Router history={enhancedHistory}>
                <div>
                    <Route 
                        path="tests"
                        getComponent={(nextState, cb) => {
                            import('./routes/Main/Main').then((Main) => { cb(null, Main.Main); });
                        }}/>

                </div>
            </Router>
        </div>
    );
};




export {App};