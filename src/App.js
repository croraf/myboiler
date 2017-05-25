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
                            import('./Dynamic').then((Dynamic) => { cb(null, Dynamic.Dynamic); });
                        }}/>

                </div>
            </Router>
        </div>
    );
};




export {App};