import React from 'react';
import { Link,
         Route,
         Redirect,
         Switch} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

//containers
import Modal from './modal/modal';
import MastHead from './home/masthead/masthead';
import GreetingContainer from  './greeting/greeting_container'; 
      
const App = () => (
  <div className="main-container">
    <Modal />
    <header>
      <MastHead />
      <GreetingContainer />
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
    </Switch>
  </div>
    
)

export default App;