import React from 'react';
import { Link,
         Route,
         Redirect,
         Switch} from 'react-router-dom';

//containers
import GreetingContainer from  './greeting/greeting_container'; 

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

 //default rendering. Incorporate Route components        
const App = () => (
    <div>
        <h1>Hello World, We are in the App Component of Youtube</h1>
        <GreetingContainer />
        <Switch>
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
)

export default App;