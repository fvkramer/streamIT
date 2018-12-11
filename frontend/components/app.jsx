import React from 'react';
import { Link,
         Route,
         Redirect,
         Switch} from 'react-router-dom';

//containers
import GreetingContainer from  './greeting/greeting_container';        

 //default rendering. Incorporate Route components        
const App = () => (
    <div>
        <h1>Hello World, We are in the App Component</h1>
        <GreetingContainer />
    </div>
)

export default App;