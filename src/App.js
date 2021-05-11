import React from 'react';
import 'antd/dist/antd.css';
import StudentNumericData from "./StudentNumericData";
import StudentTestingForm from "./StudentTestingForm";
import StudentShowData from "./StudentShowData";
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";

function App()
{
  return(  
  <div  className="App"  className="flex flex-col justify-center items-center ">
    <div className="h-auto w-auto space-y-5 border-2 border-solid border-black bg-red-300 p-4" >
    <Router>
     <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Show Data</Link>
      </li>
    </ul>

    <Switch>
      <Route exact path='/' component={StudentTestingForm}></Route>
      <Route exact path='/about' component={StudentShowData}></Route>
    </Switch>
  </Router>
    </div>
  </div>
  );
}

export default App;
